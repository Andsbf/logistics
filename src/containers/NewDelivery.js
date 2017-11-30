import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import noop from '../utils/noop';
import { onFetchDrivers } from '../actions/drivers';
import values from 'lodash/values';
import {
  createDelivery,
  newDeliveryDateChange,
  newDeliveryNameChange,
  newDeliveryDriverChange
} from '../actions/newDelivery';


class NewDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidFields: {
        name: null,
        date: null,
        driver: null
      }
    };
  }

  componentWillMount() {
    const { drivers, fetchDrivers } = this.props;

    !drivers ? fetchDrivers() : noop();
  };

  isFormInvalid = () => {
    const {
      date,
      name,
      driverId
    } = this.props;

    const invalidFields = {}

    if (!name) invalidFields.name = 'invalid';
    if (!date) invalidFields.date = 'invalid';
    if (!driverId) invalidFields.driverId = 'invalid';

    this.setState({invalidFields: invalidFields})

    return !(Object.keys(invalidFields).length === 0);
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.isFormInvalid()) return;

    this.props.onCreateDelivery();
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

  render() {
    const {
      date,
      name,
      driverId,
      onNewDeliveryDateChange,
      onNewDeliveryNameChange,
      onNewDeliveryDriverChange,
      drivers
    } = this.props;

    return (
      <main role="main">
        <h1>Create Delivery</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label htmlFor="deliveryDate" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10">
              <DatePicker
                id="deliveryDate"
                name="date"
                selected={date}
                className={"form-control " + (this.state.invalidFields.date && "is-invalid" ) }
                onChange={onNewDeliveryDateChange}
                dateFormat="YYYY-MM-DD"

              />
              { this.state.invalidFields.date &&
                <div style={{display: 'block'}} className="invalid-feedback">Please enter a valid date</div>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="deliveryName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className={"form-control " + (this.state.invalidFields.name && "is-invalid" ) }
                id="deliveryName"
                name="name"
                onChange={onNewDeliveryNameChange}
                value={name || ''}
              />
              <div className="invalid-feedback">Please enter a valid name</div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="deliveryDriver" className="col-sm-2 col-form-label">Driver</label>
            <div className="col-sm-10">
              <select
                className={"form-control " + (this.state.invalidFields.driverId && "is-invalid" ) }
                id="deliveryDriver"
                name="driver_id"
                onChange={onNewDeliveryDriverChange}
                value={driverId || ""}
              >
                <option value="" disabled>Select One</option>
                { values(drivers).map((driver) => (this.driverDropDownOption(driver))) }
              </select>
              <div className="invalid-feedback">Please choose a driver </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    onCreateDelivery() { dispatch(createDelivery()) },
    onNewDeliveryDateChange(date) { dispatch(newDeliveryDateChange(date)) },
    onNewDeliveryNameChange(e) { dispatch(newDeliveryNameChange(e.target.value)) },
    onNewDeliveryDriverChange(e) { dispatch(newDeliveryDriverChange(e.target.value)) },
    fetchDrivers() { dispatch(onFetchDrivers())  }
  })
}

const mapStateToProps = (state, ownProps) => {
  return ({
    name: state.newDelivery.name,
    date: state.newDelivery.date,
    driverId: state.newDelivery.driver_id,
    drivers: state.drivers
  })
};

NewDelivery.propTypes = {
  onCreateDelivery: PropTypes.func,
  onNewDeliveryDateChange: PropTypes.func,
  onNewDeliveryNameChange: PropTypes.func,
  onNewDeliveryDriverChange: PropTypes.func,
  fetchDrivers: PropTypes.func,
  name: PropTypes.string,
  date: PropTypes.object,
  driverId: PropTypes.string,
  drivers: PropTypes.object,
};

NewDelivery = connect(mapStateToProps, mapDispatchToProps)(NewDelivery);

export default NewDelivery;
