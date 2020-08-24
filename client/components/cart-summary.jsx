import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'cart-back') {
      this.props.setView('catalog', {});
    }
    if (event.target.id === 'checkout') {
      this.props.setView('checkout', {});
    }
  }

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  componentDidMount() {
    this.props.getTotalPrice(this.totalPrice);
  }

  render() {
    let totalPrice = 0;
    let cartList;
    let hiddenCart = 'd-none';
    const cart = this.props.cart;
    if (!cart.length) {
      cartList = <h1>No Items in Cart.</h1>;
      hiddenCart = 'd-none';
    } else {
      cartList = cart.map(cartItem => {
        totalPrice += cartItem.price;
        return <CartSummaryItem item={cartItem} key={cartItem.cartItemId}/>;
      });
      hiddenCart = '';
    }
    this.totalPrice = totalPrice;
    return (
      <div onClick={this.handleClick} className="row flex-column mt-2 mt-lg-5">
        <div className="ml-3">
          <p id="cart-back" className="c-pointer text-muted">
            &lt; Back to Catalog
          </p>
          <h2 className={hiddenCart}>My Cart</h2>
        </div>
        {cartList}
        <div className={hiddenCart}>
          <div className="d-flex justify-content-between mt-2 mb-5 ml-3 mr-3">
            <h5>Item Total {this.parsePrice(totalPrice)}</h5>
            <button id="checkout" className="btn btn-primary">Checkout </button>
          </div>
        </div>
      </div>
    );
  }
}
