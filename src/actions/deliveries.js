import { Http } from '../utils/Http';

export const DELIVERIES_FETCHED = 'DELIVERIES_FETCHED';
export const  deliveriesFetched = (deliveries) => ({
  type: DELIVERIES_FETCHED,
  deliveries
});

export const DELETE_DELIVERY = 'DELETE_DELIVERY';
export const  deleteDeliveryFromStore = (deliveryId) => ({
  type: DELETE_DELIVERY,
  deliveryId
});


export const DELIVERY_FETCHED = 'DELIVERY_FETCHED';
export const  deliveryFetched = (delivery) => ({
  type: DELIVERY_FETCHED,
  delivery
});

export const fetchDelivery = (id) => (dispatch, getState) => {
  Http.GET('/deliveries.php?id='+ id)
          .then((delivery)=> { dispatch(deliveryFetched({...delivery, id: id})) })
          .catch(error => { console.log('ERROR: ', error )})
};

export const fetchDeliveries = () => (dispatch, getState) => {
  Http.GET('/deliveries.php')
          .then((delivery)=> { dispatch(deliveriesFetched(delivery)) })
          .catch(error => { console.log('ERROR: ', error )})
};

export const deleteDelivery = (id) => (dispatch, getState) => {
  dispatch(deleteDeliveryFromStore(id));

  Http.DELETE('/deliveries.php?id='+ id)
      .then((delivery)=> { dispatch(fetchDeliveries()) })
      .catch(error => { console.log('ERROR: ', error )})
}
