import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    fetch('/api/products/1', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        }, () => console.log(this.state));
      });
  }

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  parseParagraphs(string) {
    const words = string.split('\\n');
    console.log(words);
    const paragraphs = words.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
    console.log(paragraphs);
    return paragraphs;
  }

  render() {
    if (!this.state.product) {
      return null;
    }
    return (
      <div className="card m-5">
        <p className="back-button text-muted m-2">&lt; Back to catalog</p>
        <div className="product-head d-flex">
          <img src={this.state.product.image} height="300px" alt="shake-weight.jpg"/>
          <div>
            <h1 className="card-title">{this.state.product.name}</h1>
            <h3 className="card-subtitle text-muted">{this.parsePrice(this.state.product.price)}</h3>
            <p className="card-text">{this.state.product.shortDescription}</p>
          </div>
        </div>
        <div className="card-text m-2">{this.parseParagraphs(this.state.product.longDescription)}</div>
      </div>
    );
  }
}
