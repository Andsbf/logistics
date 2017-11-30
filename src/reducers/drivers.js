import {
  DRIVERS_FETCH_COMPLETE
} from '../actions/drivers'

const initState = null

const drivers = (state = initState, action) => {
  switch (action.type) {
    case DRIVERS_FETCH_COMPLETE:
      let driversFetched = {}
      const { drivers } = action

      for (let driverId in drivers) {
        driversFetched[driverId] = { id: driverId, ...drivers[driverId] }
      }

      return {
        ...driversFetched
      };

    default:
    return state;
  }
};

export default drivers;
