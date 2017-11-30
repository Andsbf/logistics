import { Http } from '../utils/Http';
import { fetchDeliveries } from '../actions/deliveries';

export const NEW_DELIVERY_NAME_CHANGE = 'NEW_DELIVERY_NAME_CHANGE';
export const newDeliveryNameChange = (name) => ({
  type: NEW_DELIVERY_NAME_CHANGE,
  name: name
});

export const NEW_DELIVERY_DATE_CHANGE = 'NEW_DELIVERY_DATE_CHANGE';
export const newDeliveryDateChange = (date) => ({
  type: NEW_DELIVERY_DATE_CHANGE,
  date: date
});

export const NEW_DELIVERY_DRIVER_CHANGE = 'NEW_DELIVERY_DRIVER_CHANGE';
export const newDeliveryDriverChange = (driver) => ({
  type: NEW_DELIVERY_DRIVER_CHANGE,
  driver: driver
});

export const NEW_DELIVERY_CREATE_COMPLETE = 'NEW_DELIVERY_CREATE_COMPLETE';
export const newDeliveryCreateComplete = (delivery) => ({
  type: NEW_DELIVERY_CREATE_COMPLETE,
  delivery: delivery
});

export const NEW_DELIVERY_CREATE_FETCHING = 'NEW_DELIVERY_CREATE_FETCHING';
export const newDeliveryCreateFetching = (delivery) => ({
  type: NEW_DELIVERY_CREATE_FETCHING,
  delivery
});

export const createDelivery = () => (dispatch, getState) => {
  const { name, date, driver_id } = getState().newDelivery

  const body = {
    name: name,
    date: date.format('YYYY-MM-DD'),
    driver_id: driver_id
  }

  dispatch(newDeliveryCreateFetching(body))

  Http.POST('/deliveries.php', body)
          .then( (data) => dispatch(fetchDeliveries()))
          .catch(error => { console.log('ERROR: ', error )})
};
