import React from 'react'
import Main from './Main'

const Root = ({ route, serverState }) => (
  <Main routes={route.routes} serverState={serverState} />
)

export default Root
