import React from 'react';
import Header from './header.jsx';
import ProductListItem from './product-list-item.jsx';

export default class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <ProductListItem/>
      </>
    );
  }
}
