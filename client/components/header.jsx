import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <header className="navbar bg-dark navbar-dark">
        <span className="navbar-text ml-5">
          <i className="fas fa-dollar-sign mr-1"></i>
          Wicked Sales
        </span>
      </header>
    );
  }
}
