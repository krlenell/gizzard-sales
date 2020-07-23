import React from 'react';
import ProductListItem from './product-list-item.jsx';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
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
          products: data
        });
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const productItems = this.state.products.map(product => (
      <div className="col-4" key={product.productId}>
        <ProductListItem product={product}/>
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
