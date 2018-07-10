import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import HTML from '../shared/components/HTML'
import App from '../shared/App'

export default function renderRoute(req, res) {
  const router = (
    <StaticRouter location={req.originalUrl} context={{}}>
      <App />
    </StaticRouter>
  )
  const app = renderToString(router)
  const html = renderToString(<HTML html={app} serverState={{}} />)
  return res.send(`<!DOCTYPE html>${html}`)
}
