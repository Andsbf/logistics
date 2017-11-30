import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DeliveryRow = ({ delivery, driver = {} }) => { return (
  <tr key={delivery.id}>
    <th scope="row">{delivery.persisted ? delivery.id : ''}</th>
    <td>{delivery.date}</td>
    <td>{delivery.name}</td>
    <td>{driver.name}</td>
    <td className="text-right">
      <NavLink to={delivery.id + '/update'} className="btn btn-outline-primary">Edit</NavLink>
      &nbsp;
      <NavLink to={delivery.id + '/delete'} className="btn btn-outline-danger">Delete</NavLink>
    </td>
  </tr>
)};

DeliveryRow.propTypes = {
  delivery: PropTypes.object,
  driver: PropTypes.object
};

export default DeliveryRow;
