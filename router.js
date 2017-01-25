const lr = require('lazy-router')
const render = require('lazy-render')
const NotFound = require('./NotFound')

function defaultAction (path, location) {
  render(NotFound, {location})
}

const router = lr('/404', {defaultAction})
module.exports = router
