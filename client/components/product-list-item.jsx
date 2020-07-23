import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    return (
      <div className="card boot-card">
        <img src="../../server/public/images/ostrich-pillow.jpg" alt="ostrichPillow"/>
        <div className="card-body">
          <h5 className="card-title">Ostrich Pillow</h5>
          <p className="card-text">Info about ostrich Pillow</p>
        </div>
      </div>
    );
  }
}
