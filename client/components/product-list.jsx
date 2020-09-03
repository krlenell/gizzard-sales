import React from 'react';
import ProductListItem from './product-list-item.jsx';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.getDisplay = this.getDisplay.bind(this);
    this.state = {
      products: [],
      loaded: false
    };
  }

  getProducts() {
    fetch('/api/products', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data,
          loaded: true
        });
      })
      .catch(() => {
        this.setState({
          loaded: true
        });
      });
  }

  getDisplay(event, productId) {
    this.props.setView('details', productId);
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const products = this.state.products;
    if (this.state.loaded && products.length === 0) {
      return (
        <h3>No Products to Display</h3>
      );
    }
    if (!this.state.loaded) {
      return (
        <div className="d-flex m-2">
          <h3>Loading...</h3>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    const productItems = this.state.products.map(product => (
      <div className="col-md-6 col-lg-4" key={product.productId}>
        <ProductListItem getDisplay={this.getDisplay} product={product}/>
      </div>
    ));
    return (
      <div className="container">
        <div className="row">
          {productItems}
        </div>
      </div>
    );

  }
}
