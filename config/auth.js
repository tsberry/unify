const exjwt = require('express-jwt');

// Init the express-jwt middleware
const isAuthenticated = exjwt({
    secret: 'all sorts of code up in here'
});

module.exports = isAuthenticated;