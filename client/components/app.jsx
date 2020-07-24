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
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    let view;
    if (this.state.view.name === 'details') {
      view = <ProductDetails setView={this.setView} params={this.state.view.params}/>;
    } else if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView} />;
    }
    return (
      <>
        <Header/>
        {view}
      </>
    );
  }
}
