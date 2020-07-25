import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details.jsx';
import { response } from 'express';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cart: data
        });
      });
  }

  componentDidMount() {
    this.getCartItems();
  }

  addToCart(product) {
    fetch('/api/cart/', {
      header: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(respone => response.json())
      .then(data => {
        const cart = this.state.cart.concat(data);
        this.setState({
          cart: cart
        });
      });
  }

  render() {
    const cartCount = this.state.cart.length;
    let view;
    if (this.state.view.name === 'details') {
      view = <ProductDetails setView={this.setView} params={this.state.view.params}/>;
    } else if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    }
    return (
      <>
        <Header cartCount={cartCount}/>
        {view}
      </>
    );
  }
}
