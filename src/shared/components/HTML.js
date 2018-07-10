import React from 'react'

const HTML = ({ html, serverState }) => (
  <html lang="en">
    <head>
      <title>ZN Universal</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
      <script type="application/javascript" src="/bundle.js" data-server-state={JSON.stringify(serverState)} id='server-state' />
    </body>
  </html>
)

module.exports = HTML
