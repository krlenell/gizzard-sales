import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'header-cart') {
      this.props.setView('cart', {});
    }
    if (event.target.id === 'logo') {
      this.props.setView('catalog', {});
    }
  }

  render() {
    return (
      <header onClick={this.handleClick} className="navbar bg-dark navbar-dark">
        <span id="logo" className="c-pointer navbar-brand ml-5">
          Gizzard Sale
          <i className="fas fa-dollar-sign mr-1"></i>
        </span>
        <span id="header-cart" className="c-pointer navbar-brand mr-5">
          {this.props.cartCount} Items <i className="fas fa-shopping-cart"></i>
        </span>
      </header>
    );
  }
}
