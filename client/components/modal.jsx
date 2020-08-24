import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === 'understand') {
      this.props.clear();
    }
  }

  render() {
    return (
      <div>
        <h1>Please Read:</h1>
        <p>This app is for demo purposes only and no real purchases can be made.
          Please click the button below if you understand and wish to view this page.
        </p>
        <button onClick={this.handleClick} id="understand" className="btn btn-primary">I understand</button>
      </div>
    );
  }
}
