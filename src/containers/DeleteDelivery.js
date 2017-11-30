import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDelivery } from '../actions/deliveries';


class DeleteDelivery extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onDeleteDelivery();
    this.props.history.push("/");
  }

  render() {
    return (
      <main role="main">
        <h1>Delete Delivery</h1>
        <form onSubmit={this.onSubmit}>
          <p>Are you sure you want to delete this delivery?</p>
          <button  type="submit" className="btn btn-danger">Delete</button>
        </form>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const deliveryId = ownProps.match.params.id

  return ({
    onDeleteDelivery() { dispatch(deleteDelivery(deliveryId)) }
  })
}

DeleteDelivery.propTypes = {
  onDeleteDelivery: PropTypes.func
};

DeleteDelivery = connect(null, mapDispatchToProps)(DeleteDelivery);

export default DeleteDelivery;
