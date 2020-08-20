import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details.jsx';
import CartSummary from './cart-summary.jsx';
import CheckoutForm from './checkout-form.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      totalPrice: 0
    };
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cart: data
        });
      });
  }

  getTotalPrice(total) {
    if (Number.isInteger(total)) {
      this.setState({
        totalPrice: total
      });
    }
  }

  componentDidMount() {
    this.getCartItems();
  }

  addToCart(product) {
    const cart = this.state.cart.concat();
    fetch('/api/cart/', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => {
        cart.push(data);
        this.setState({
          cart: cart
        });
      });
  }

  placeOrder(order) {
    fetch('/api/orders/', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(order)
    })
      .then(response => {
        this.setState({
          cart: [],
          view: {
            name: 'catalog',
            params: {}
          }
        });
      });
  }

  render() {
    const cartCount = this.state.cart.length;
    let view;

    if (this.state.view.name === 'details') {
      view = <ProductDetails
        addToCart={this.addToCart}
        setView={this.setView}
        params={this.state.view.params}
      />;
    } else if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else if (this.state.view.name === 'cart') {
      view = <CartSummary
        setView={this.setView}
        cart={this.state.cart}
        getTotalPrice={this.getTotalPrice}
      />;
    } else if (this.state.view.name === 'checkout') {
      view = <CheckoutForm
        setView={this.setView}
        placeOrder={this.placeOrder}
        totalPrice = {this.state.totalPrice}
        getTotalPrice = {this.state.getTotalPrice}
      />;
    }
    return (
      <>
        <Header setView={this.setView} cartCount={cartCount}/>
        <div className="container">
          {view}
        </div>
      </>
    );
  }
}
