import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, creditCard, shippingAddress } = this.state;
    const newOrder = {
      name: name || 'blank',
      creditCard: parseInt(creditCard, 10) || 1,
      shippingAddress: shippingAddress || 'blank'
    };
    this.props.placeOrder(newOrder);
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  parsePrice(cost) {
    let returnPrice = cost.toString(10);
    const length = returnPrice.length;
    returnPrice = '$' + returnPrice.substring(0, length - 2) + '.' + returnPrice.substring(length - 2, length);
    return returnPrice;
  }

  handleClick(e) {
    if (e.currentTarget.id === 'back-button') {
      this.props.setView('catalog', {});
    }
  }

  render() {

    return (
      <div className="mt-4 d-flex flex-column justify-content-between">
        <div className="alert alert-danger" role="alert">
          Do not use your personal information here.  Remember, this is a demo
          app and you are not buying anything.
        </div>
        <h1 >My Cart</h1>
        <h6 className="text-muted">
          {`Order Total: ${this.parsePrice(this.props.totalPrice)}`}
        </h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="creditCard">Credit Card</label>
            <input
              type="text"
              className="form-control"
              id="creditCard"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shippingAddress">Shipping Address</label>
            <textarea
              rows="3"
              className="form-control"
              id="shippingAddress"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <p
              onClick={this.handleClick}
              id="back-button"
              className="c-pointer text-muted"
            >
              &lt; Continue Shopping
            </p>
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}
