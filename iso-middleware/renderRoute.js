// const React = require('react')

function renderRoute(req, res) {
  return res.send('<!DOCTYPE html><html><head><title>Some Page</title></head><body><h1>Some Page</h1></body></html>')
}

module.exports = renderRoute
