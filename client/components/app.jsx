import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  setView(name, params) {
    console.log('name', name, 'params', params);
  }

  render() {
    return (
      <>
        <Header/>
        <ProductList setView={this.setView}/>
      </>
      // <ProductDetails/>
    );
  }
}
