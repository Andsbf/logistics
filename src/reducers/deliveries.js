import omit from 'lodash/omit';
import uuidv4 from '../utils/uuidv4';

import {
  DELIVERIES_FETCHED,
  DELIVERY_FETCHED,
  DELETE_DELIVERY
} from '../actions/deliveries';
import {
  NEW_DELIVERY_CREATE_FETCHING
} from '../actions/newDelivery';
import { UPDATE_DELIVERY_PROCESSING } from '../actions/editDelivery';

const initState = {};

const deliveriesReducer = (state = initState, action) => {
  switch (action.type) {
    case DELIVERY_FETCHED:
    case NEW_DELIVERY_CREATE_FETCHING:
    case UPDATE_DELIVERY_PROCESSING:
      const { delivery } = action

      const deliveryData = {
        persisted: action.type === DELIVERY_FETCHED,
        id: uuidv4(),
        ...delivery
      }

      return {
        ...state,
        [deliveryData.id]: deliveryData
      }

    case DELIVERIES_FETCHED:
      let deliveriesFetched = {}
      const { deliveries } = action

      for (let deliveryId in deliveries) {
        deliveriesFetched[deliveryId] = {
          id: deliveryId,
          persisted: true,
          ...deliveries[deliveryId]
        }
      }

      return {
        ...deliveriesFetched
      }

    case DELETE_DELIVERY:
      return {
        ...omit(state, action.deliveryId), a: 'a'
      }

    default:
      return state;
  }
};

export default deliveriesReducer;
