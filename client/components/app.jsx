import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details.jsx';
import CartSummary from './cart-summary.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      view: {
        name: 'cart',
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
    const cart = this.state.cart.concat();
    fetch('/api/cart/', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => {
        cart.push(data);
        this.setState({
          cart: cart
        });
      });
  }

  render() {
    const cartCount = this.state.cart.length;
    let view;

    if (this.state.view.name === 'details') {
      view = <ProductDetails addToCart={this.addToCart} setView={this.setView} params={this.state.view.params}/>;
    } else if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    } else if (this.state.view.name === 'cart') {
      view = <CartSummary setView={this.setView} cart={this.state.cart} />;
    }
    return (
      <>
        <Header cartCount={cartCount}/>
        {view}
      </>
    );
  }
}
