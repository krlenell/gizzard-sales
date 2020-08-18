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
  }

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  render() {
    let totalPrice = 0;
    let cartList;
    const cart = this.props.cart;
    if (!cart.length) {
      cartList = <h1>No Items in Cart.</h1>;
    } else {
      cartList = cart.map(cartItem => {
        totalPrice += cartItem.price;
        return <CartSummaryItem item={cartItem} key={cartItem.cartItemId}/>;
      });
    }
    return (
      <div onClick={this.handleClick} className="row flex-column mt-5">
        <div>
          <p id="cart-back" className="c-pointer text-muted">&lt; Back to Catalog</p>
          <h2>My Cart</h2>
        </div>
        {cartList}
        <h5>Item Total {this.parsePrice(totalPrice)}</h5>
      </div>
    );
  }
}
