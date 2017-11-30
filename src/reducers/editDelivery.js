import {
  EDIT_DELIVERY_DRIVER_CHANGE,
  SET_EDIT_DELIVERY
} from '../actions/editDelivery'

const initState = {
  id: null,
  newDriverId: null
};

const login = (state = initState, action) => {
  switch (action.type) {
    case SET_EDIT_DELIVERY:
      return {
        ...state,
        id: action.deliveryId,
      };

    case EDIT_DELIVERY_DRIVER_CHANGE:
      return {
        ...state,
        newDriverId: action.driverId
        ,
      };
         /*
       * case USERNAME_UPDATE:
       * return {
       *   ...state,
       *   username: action.username,
       *   invalidCredentials: false
       * };

       * case INVALID_CREDENTIALS:
       * return {
       *   ...state,
       *   invalidCredentials: true,
       *   authorizing: false
       * };

       * case AUTHORIZING:
       * return {
       *   ...state,
       *   authorizing: true
       * };

       * case CLEAR_LOGIN:
       * return {
       *   ...initState
       * };*/

    default:
    return state;
  }
};

export default login;
