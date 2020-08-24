import React from 'react';

export default class Modal extends React.Component {

  render() {
    return (
      <div>
        <h1>Please Read:</h1>
        <p>This app is for demo purposes only and no real purchases can be made.
          Please click the button below if you understand and wish to view this page.
        </p>
        <button className="btn btn-primary">I understand</button>
      </div>
    );
  }
}
