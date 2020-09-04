import React from 'react';

export default class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clearConfirmation();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <div style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'black',
          opacity: 0.5,
          zIndex: 7
        }}></div>
        <div style={{
          position: 'fixed',
          zIndex: 8,
          top: '50%',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        className="card w-75"
        tabIndex="0">
          <div className="card-body">
            <h1 className="card-title">Thank You for Your Purchase</h1>
            <p>You should never expect to recieve your order as this is a demo site. Have a great day!
            </p>
          </div>
        </div>

      </div>
    );
  }
}
