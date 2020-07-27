require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  select "productId",
  "name",
  "price",
  "image",
  "shortDescription"
  from "products"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  if (!Number.isInteger(productId)) {
    next(new ClientError('please enter a valid integer', 400));
    return;
  }
  const sql = `
  select *
  from "products"
  where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        next(new ClientError(`productId ${productId} not found`, 404));
        return;
      }
      res.json(product);
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  const sql = `
  select *
  from "carts"
  `;
  db.query(sql)
    .then(result => {
      if (!req.session.cartId) {
        res.json([]);
      } else {
        const sql = `
          select "c"."cartItemId",
          "c"."price",
          "p"."productId",
          "p"."image",
          "p"."name",
          "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
          where "c"."cartId" = $1
        `;
        const params = [req.session.cartId];
        return db.query(sql, params).then(result => res.json(result.rows));
      }
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
  if (!productId) {
    next(new ClientError(`productId ${req.body.productId} is not a valid input`, 400));
    return;
  }
  const sql = `
  select "price"
  from "products"
  where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(`productId ${productId} doesn't exist`, 400);
      }
      const price = result.rows[0].price;
      if (req.session.cartId) {
        const cartId = req.session.cartId;
        return {
          price: price,
          cartId: cartId
        };
      }
      const sql = `
      insert into "carts" ("cartId", "createdAt")
      values (default, default)
      returning "cartId"
      `;
      return db.query(sql).then(nextResult => {
        const cartId = nextResult.rows[0].cartId;
        return {
          price: price,
          cartId: cartId
        };
      });
    })
    .then(result => {
      req.session.cartId = result.cartId;
      const sql = `
      insert into "cartItems" ("cartId", "productId", "price")
      values ($1, $2, $3)
      returning "cartItemId"
      `;
      const params = [result.cartId, productId, result.price];
      return db.query(sql, params).then(nextResult => nextResult.rows[0]);
    })
    .then(result => {
      const sql = `
        select "c"."cartItemId",
      "c"."price",
      "p"."productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartItemId" = $1
      `;
      const params = [result.cartItemId];
      return db.query(sql, params).then(nextResult => {
        res.status(201).json(nextResult.rows[0]);
      });
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  console.log(req.session);
  if (!req.session.cartId) {
    next(new ClientError('There is no cart for this session', 400));
    return;
  }
  switch (false) {
    case ('name' in req.body):
      next(new ClientError('Name is not supplied', 400));
      break;
    case ('creditCard' in req.body):
      next(new ClientError('Credit Card is required', 400));
      break;
    case ('shippingAddress' in req.body):
      next(new ClientError('Shipping address is required', 400));
      break;
    default:
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
