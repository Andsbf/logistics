import { Http } from '../utils/Http';

export const DRIVERS_FETCH_COMPLETE = 'DRIVERS_FETCH_COMPLETE';
export const  driversFetchComplete = (drivers) => ({
  type: DRIVERS_FETCH_COMPLETE,
  drivers
});

export const onFetchDrivers = () => (dispatch, getState) => {
  Http.GET('/drivers.php')
          .then(delivery => { dispatch(driversFetchComplete(delivery)) })
          .catch(error => { console.log('ERROR: ', error )})
};
