import React from 'react';

export default class ProductListItem extends React.Component {

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  render() {
    return (
      <div className="card boot-card m-2 ">
        <img className="card-img-top boot-card-img" src={this.props.product.image} height="200px" alt="ostrichPillow"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.parsePrice(this.props.product.price)}</p>
          <p className="card-text">{this.props.product.shortDescription}</p>
        </div>
      </div>
    );
  }
}
