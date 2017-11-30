import React from 'react';
import { shallow } from 'enzyme';
import DeliveryRow from '../../components/DeliveryRow';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const delivery = {
  id: '1',
  name: "Anderson's delivery",
  persisted: true,
  date: '2017-12-01',
};

const driver = { name: 'Antonio' };

const wrapper = shallow(<DeliveryRow delivery={delivery} driver={driver}/>);

it('Renders a table row', () => {
  expect(wrapper.find('tr').length).toEqual(1);
});

it('Renders the 4 table columns', () => {
  expect(wrapper.find('td').length).toEqual(4);
});


it('Renders the the delivery date on the first column', () => {
  expect(wrapper.find('td').at(0).text()).toEqual(delivery.date);
});

it('Renders the the delivery name on the second column', () => {
  expect(wrapper.find('td').at(1).text()).toEqual(delivery.name);
});

it('Renders the the delivery driver`s name on the third column', () => {
  expect(wrapper.find('td').at(2).text()).toEqual(driver.name);
});


it('Renders the update and delete link', () => {
  expect(wrapper.find('NavLink').length).toEqual(2);
});
