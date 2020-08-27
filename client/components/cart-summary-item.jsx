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
      <div className="m-4 m-md-2 card flex-lg-row flex-column align-items-center">
        <img
          height="300px"
          className="m-2"
          style={{ objectFit: 'contain' }}
          src={this.props.item.image}
          alt={this.props.item.name}
        />
        <div className="card-body m-lg-4">
          <h2 className="cart-title">{this.props.item.name}</h2>
          <h3 className="card-text text-muted">
            {this.parsePrice(this.props.item.price)}
          </h3>
          <p className="card-text">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
