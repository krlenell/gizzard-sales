import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <header className="navbar bg-dark navbar-dark">
        <span className="navbar-brand ml-5">
          <i className="fas fa-dollar-sign mr-1"></i>
          Wicked Sales
        </span>
        <span className="navbar-brand mr-5">
          {this.props.cartCount} Items <i className="fas fa-shopping-cart"></i>
        </span>
      </header>
    );
  }
}
