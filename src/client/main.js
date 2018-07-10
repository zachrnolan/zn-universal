import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/App'

const serverStateElement = document.getElementById('server-state')
const serverState = JSON.parse(serverStateElement.getAttribute('data-server-state'))

const renderRouter = Component => (
  ReactDOM.hydrate(
    <BrowserRouter>
      <Component serverState={serverState} />
    </BrowserRouter>,
    document.getElementById('root'),
  )
)

renderRouter(App)
