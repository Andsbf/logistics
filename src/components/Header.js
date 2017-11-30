import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const style = {
  inline: {
    display: 'inline-block'
  },
  img: {
    height: '28px',
    marginBottom: '8px'
  }

}

const Header = () => (
  <header className="header clearfix">
    <nav>
      <ul className="nav nav-pills float-right">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">Deliveries</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create" className="nav-link" activeClassName="active">New Delivery</NavLink>
        </li>
      </ul>
    </nav>
    <img  src={logo} style={{...style.img, ...style.inline}} alt="fireSpot"/>
    &nbsp;
    <h3 style={style.inline} className="text-muted">CartonCloud</h3>
  </header>
);

export default Header;
