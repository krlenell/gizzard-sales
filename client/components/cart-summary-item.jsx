import React from 'react';

export default class CartSummaryItem extends React.Component {

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  render() {
    return (
      <div className="cart-card col-12  mt-1 mb-1 card flex-row">
        <img className="cart-img m-2" src={this.props.item.image} alt="wax-vac"/>
        <div className="card-body m-4">
          <h2 className="cart-title">{this.props.item.name}</h2>
          <h3 className="card-text text-muted">{this.parsePrice(this.props.item.price)}</h3>
          <p className="card-text">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
