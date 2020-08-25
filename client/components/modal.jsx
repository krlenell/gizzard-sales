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
            <h1 className="card-title">Please Read:</h1>
            <p>This app is for demo purposes only and no real purchases can be made.
            These prices are all memes, so you&#39;d be getting ripped off if you actaully bought anything here.
            <br /><br /> <em>Please click the button below if you understand and wish to view this page:</em>
            </p>
            <button onClick={this.handleClick} id="understand" className="btn btn-primary">I understand</button>
          </div>
        </div>

      </div>
    );
  }
}
