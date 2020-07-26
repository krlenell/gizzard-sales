import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'cart-back') {
      console.log('clicked cart back');
      this.props.setView('cart', {});
    }
  }

  render() {
    let totalPrice = 0;
    let cartList;
    const cart = this.props.cart;
    console.log('cart', cart);
    if (!cart.length) {
      cartList = <h1>No Items in Cart.</h1>;
    } else {
      cartList = cart.map(cartItem => {
        totalPrice += cartItem.price;
        return <CartSummaryItem item={cartItem} key={cartItem.cartItemId}/>;
      });
    }
    return (
      <div onClick={this.handleClick} className="ml-5">
        <div>
          <p id="cart-back" className="cart-back text-muted">&lt; Back to Catalog</p>
          <h2>My Cart</h2>
        </div>
        {cartList}
        <p>Total Price: {totalPrice}</p>
      </div>
    );
  }
}
