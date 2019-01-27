require('babel-register')({
    presets: ['es2015', 'es2016' ]
})

// Import the rest of our application.
module.exports = require('./app.js')
