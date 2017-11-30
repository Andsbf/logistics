import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'

import configStore from './configStore'

const store = configStore();

render(
  <Root store={store}/>,
  document.getElementById('root')
)
