import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details.jsx';

export default class App extends React.Component {

  render() {
    return (
      // <>
      //   <Header/>
      //   <ProductList/>
      // </>
      <ProductDetails/>
    );
  }
}
