import React from 'react';

export default class CartSummaryItem extends React.Component {

  render() {
    return (
      <div className="card flex-row">
        <img className="cart-img m-2" src={this.props.item.image} alt="wax-vac"/>
        <div className="card-body m-4">
          <h2 className="cart-title">{this.props.item.name}</h2>
          <h3 className="card-text text-muted">{this.props.item.price}</h3>
          <p className="card-text">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
