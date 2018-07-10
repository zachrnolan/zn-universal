import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
// const matchRoutes = require('react-router-config').matchRoutes
// const routes = require('../shared/routes')
import HTML from '../shared/components/HTML'
import App from '../shared/App'

function renderRoute(req, res) {
  const router = (
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  )
  const app = renderToString(router)
  const html = renderToString(<HTML html={app} />)
  return res.send(`<!DOCTYPE html>${html}`)
}

module.exports = renderRoute
