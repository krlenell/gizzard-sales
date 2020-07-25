import React from 'react';

export default class CartSummaryItem extends React.Component {

  render() {
    return (
      <div className="card m-5 flex-row">
        <img className="cart-img m-2" src="/images/wax-vac.jpg" alt="wax-vac"/>
        <div className="card-body m-4">
          <h2 className="cart-title">Wax Vac</h2>
          <h3 className="card-text text-muted">$9.99</h3>
          <p className="card-text">This product is absolutely disgusting</p>
        </div>
      </div>
    );
  }
}
