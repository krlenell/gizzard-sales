import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products/1', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  render() {
    return (
      null
    );
  }
}
