import { combineReducers } from 'redux';
import newDelivery from './newDelivery';
import deliveries from './deliveries';
import editDelivery from './editDelivery';
import drivers from './drivers';

const reducers = combineReducers({
  deliveries,
  newDelivery,
  editDelivery,
  drivers
});

export default reducers;
