import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'cart-back') {
      console.log('Clicked cart back');
    }
  }

  render() {
    const cart = this.props.cart;
    let cartList;
    if (!cart.length) {
      cartList = <h1 className="ml-5">No Items in Cart.</h1>;
    } else {
      cartList = cart.map(cartItem => {
        return <CartSummaryItem item={cartItem} key={cartItem.productId}/>;
      });
    }
    return (
      <div onClick={this.handleClick}>
        <div className="ml-5">
          <p id="cart-back" className="cart-back text-muted">&lt; Back to Catalog</p>
          <h2>My Cart</h2>
        </div>
        {cartList}
      </div>
    );
  }
}
