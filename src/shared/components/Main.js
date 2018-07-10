import React from 'react'
import { renderRoutes } from 'react-router-config'

const Main = ({ routes, serverState }) => (
  <div>
    {renderRoutes(routes, { serverState })}
  </div>
)

export default Main
