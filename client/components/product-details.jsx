import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    fetch(`/api/products/${this.props.params}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      });
  }

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  handleClick(event) {
    if (event.target.id === 'details-back') {
      this.props.setView('catalog', {});
    } else if (event.target.id === 'add-to-cart') {
      this.props.addToCart(this.state.product);
    }
  }

  render() {
    if (!this.state.product) {
      return null;
    }
    const splitDescription = this.state.product.longDescription.split(';');
    const tracklist = splitDescription.map((track, trackNumber) => {
      return <li key={trackNumber}>{track}</li>;
    });
    return (
      <div className="card mt-2 m-lg-5" onClick={this.handleClick}>
        <p id="details-back" className="c-pointer text-muted m-2">
          &lt; Back to catalog
        </p>
        <div className="d-flex flex-md-row flex-column">
          <img
            src={this.state.product.image}
            height="300px"
            style={{ objectFit: 'contain' }}
            alt={this.state.product.name}
          />
          <div className="ml-lg-3 ml-1">
            <h1 className="card-title">
              {this.state.product.name}
            </h1>
            <h3 className="card-subtitle text-muted">
              {this.parsePrice(this.state.product.price)}
            </h3>
            <p className="card-text">
              {this.state.product.shortDescription}
            </p>
            <button id="add-to-cart" className="btn btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="m-2">
          <h6 className="card-title">Tracklist</h6>
          <div className="card-text">
            <ol>
              {tracklist}
            </ol>

          </div>
        </div>
      </div>
    );
  }
}
