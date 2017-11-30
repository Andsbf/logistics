import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDeliveries } from '../actions/deliveries';
import { onFetchDrivers } from '../actions/drivers';
import DeliveryRow from '../components/DeliveryRow';
import values from 'lodash/values';
import { object, func } from 'prop-types';

class Deliveries extends Component {
  componentWillMount() {
    const { fetchDeliveries , fetchDrivers } = this.props;

    fetchDeliveries();
    fetchDrivers();
  };

  render() {
    const { deliveries, drivers } = this.props;

    return (
      <main role="main">
        <h1>Deliveries</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Driver</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { values(deliveries).map((delivery)=> (
              <DeliveryRow
                key={delivery.id}
                delivery={delivery}
                driver={drivers[delivery.driver_id]}
              />
            )) }
          </tbody>
        </table>
      </main>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchDeliveries() { dispatch(fetchDeliveries()) },
  fetchDrivers() { dispatch(onFetchDrivers()) }
});

const mapStateToProps = (state) => ({
  deliveries: state.deliveries,
  drivers: state.drivers || {}
});

Deliveries.propTypes = {
  fetchDeliveries: func,
  fetchDrivers: func,
  deliveries: object,
  drivers: object.isRequired

};

Deliveries = connect(mapStateToProps, mapDispatchToProps)(Deliveries);

export default Deliveries;
