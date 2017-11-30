import { Http } from '../utils/Http';
import { fetchDeliveries } from '../actions/deliveries';

export const SET_EDIT_DELIVERY = 'SET_EDIT_DELIVERY ';
export const setEditDelivery = (deliveryId) => ({
  type: SET_EDIT_DELIVERY,
  deliveryId
});

export const EDIT_DELIVERY_DRIVER_CHANGE = 'EDIT_DELIVERY_DRIVER_CHANGE';
export const editDeliveryDriverChange = (driverId) => ({
  type: EDIT_DELIVERY_DRIVER_CHANGE,
  driverId
});

export const UPDATE_DELIVERY_PROCESSING = 'UPDATE_DELIVERY_PROCESSING';
export const updateDeliveryProcessing = (delivery) => ({
  type: UPDATE_DELIVERY_PROCESSING,
  delivery
});

export const updateDelivery = () => (dispatch, getState) => {
  const { id, newDriverId } = getState().editDelivery;
  const delivery = getState().deliveries[id];

  const body = {
    name: delivery.name,
    date: delivery.date,
    driver_id: newDriverId
  }

  dispatch(updateDeliveryProcessing({id: id, ...body}))

  Http.PUT('/deliveries.php?id=' + id, body)
          .then( (data) => dispatch(fetchDeliveries()))
          .catch(error => { console.log('ERROR: ', error )})

}
