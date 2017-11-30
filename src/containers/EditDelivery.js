import React, {Component} from 'react';
import values from 'lodash/values';
import noop from '../utils/noop';
import { object, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { onFetchDrivers } from '../actions/drivers';
import { fetchDelivery } from '../actions/deliveries';
import {
  setEditDelivery,
  editDeliveryDriverChange,
  updateDelivery
} from '../actions/editDelivery';
import { } from 'prop-types';

class editDelivery extends Component {
  componentWillMount() {
    const {
      delivery,
      drivers,
      fetchDrivers,
      onFetchDelivery,
      editDeliveryId,
      match: { params }
    } = this.props;

    editDeliveryId(params.id)

    !drivers ? fetchDrivers() : noop();

    !delivery ? onFetchDelivery(params.id) : noop();
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onUpdateDelivery();
    this.props.history.push("/");
  }

  driverDropDownOption = ({ id, name }) => (
    <option
      key={id}
      value={id}
    >
      {name}
    </option>
  )

  render(){
    const {
      onEditDeliveryDriverChange,
      drivers,
      delivery,
      newDriverId
    } = this.props;

    if(!delivery) return null;

    return (
      <main role="main">
        <h1>Update Delivery</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label htmlFor="deliveryDate" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10">
              <input
                disabled
                type="text"
                className="form-control"
                id="deliveryDate"
                name="date"
                value={delivery.date}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="deliveryName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="deliveryName"
                name="name"
                disabled
                value={this.props.delivery.name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="deliveryDriver" className="col-sm-2 col-form-label">Driver</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="deliveryDriver"
                name="driver_id"
                onChange={onEditDeliveryDriverChange}
                value={newDriverId || delivery.driver_id}
              >
                <option value="" disabled>Select One</option>
                { values(drivers).map((driver) => (this.driverDropDownOption(driver))) }
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;
  return ({
    editDeliveryId(id) { dispatch(setEditDelivery(id)) },
    onEditDeliveryDriverChange(e) { dispatch(editDeliveryDriverChange(e.target.value))},
    onUpdateDelivery() {dispatch(updateDelivery())},
    onFetchDelivery() {dispatch(fetchDelivery(id))},
    fetchDrivers() {dispatch(onFetchDrivers())}
  })
}

const mapStateToProps = (state, ownProps) => {
  const deliveryId = ownProps.match.params.id;
  const delivery =  state.deliveries[deliveryId] || null;

  return ({
    delivery: delivery,
    drivers: state.drivers,
    newDriverId: state.editDelivery.newDriverId
  })
};

editDelivery.propTypes = {
  delivery: object,
  deliveryId: string,
  newDriverId: string,
  editDeliveryId: func,
  onEditDeliveryDriverChange: func,
  onUpdateDelivery: func,
  onFetchDelivery: func,
  fetchDrivers: func
};

editDelivery = connect(mapStateToProps, mapDispatchToProps)(editDelivery);

export default editDelivery;
