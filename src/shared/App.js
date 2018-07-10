import React from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

const App = props => (
  <div>
    {renderRoutes(routes, props)}
  </div>
)

export default App
