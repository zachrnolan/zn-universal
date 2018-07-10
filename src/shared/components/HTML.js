import React from 'react'

const HTML = ({ html, serverState }) => (
  <html lang="en">
    <head>
      <title>ZN Universal</title>
    </head>
    <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <script dangerouslySetInnerHTML={{
        __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${serverState})`,
      }}
      />
      <script type="application/javascript" src="/bundle.js" />
    </body>
  </html>
)

module.exports = HTML
