const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;
const user = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
function(username, password, done) {
    user.findOne({ where: {email: username}}, function(err, user) {
        if (err) {return done(err); }
        if (!user) {
            return done(null, false, {message: 'Incorrect Username'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Incorrect Password'});
        }
        console.log("from inside, did work");
        return done(null, user);
    });
}));

module.exports = passport;