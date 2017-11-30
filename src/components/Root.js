import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import NewDelivery from '../containers/NewDelivery';
import EditDelivery from '../containers/EditDelivery';
import Deliveries from '../containers/Deliveries';
import DeleteDelivery from '../containers/DeleteDelivery';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router >
        <div className="container">
          <Header />
          <Switch>
            <Route path='/' exact component={Deliveries}  />
            <Route path='/create' component={NewDelivery} />
            <Route path='/:id/update' component={EditDelivery} />
            <Route path='/:id/delete' component={DeleteDelivery} />
            <Redirect from='*' to={'/'} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
