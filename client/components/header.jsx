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
      <header
        style={{ zIndex: 6 }}
        onClick={this.handleClick}
        className="navbar sticky-top bg-dark navbar-dark">
        <span id="logo" className="c-pointer navbar-brand ml-lg-5 ml-md-3">
          Gizzard Sale
          <i className="fas fa-dollar-sign mr-1"></i>
        </span>
        <span id="header-cart" className="c-pointer navbar-brand mr-lg-5 mr-md-3">
          {this.props.cartCount} Items <i className="fas fa-shopping-cart"></i>
        </span>
      </header>
    );
  }
}
