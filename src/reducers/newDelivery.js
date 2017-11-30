import {
  NEW_DELIVERY_NAME_CHANGE,
  NEW_DELIVERY_DATE_CHANGE,
  NEW_DELIVERY_DRIVER_CHANGE,
  NEW_DELIVERY_CREATE_COMPLETE,
} from '../actions/newDelivery'

const initState = {
  name: null,
  date: null,
  driver_id: null,
  errors: null

};

const newDelivery = (state = initState, action) => {
  switch (action.type) {
    case NEW_DELIVERY_NAME_CHANGE:
      return {
        ...state,
        name: action.name,
      };

    case NEW_DELIVERY_DATE_CHANGE:
      return {
        ...state,
        date: action.date,
      };

    case NEW_DELIVERY_DRIVER_CHANGE:
      return {
        ...state,
        driver_id: action.driver,
      };

    case NEW_DELIVERY_CREATE_COMPLETE:
      return {
        ...initState
      };

    default:
    return state;
  }
};

export default newDelivery;
