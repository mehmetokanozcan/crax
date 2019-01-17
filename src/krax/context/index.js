if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-waterfall.min.js')
} else {
  module.exports = require('./react-waterfall.dev.js')
}
