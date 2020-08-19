import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {

    return (
      <div className="mt-4 d-flex flex-column justify-content-between">
        <h1 >My Cart</h1>
        <h6 className="text-muted">Order Total: PlaceHolder</h6>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="credit">Credit Card</label>
            <input type="text" className="form-control" id="credit" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea rows="3" className="form-control" id="address" />
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-muted">&lt; Continue Shopping</p>
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}
