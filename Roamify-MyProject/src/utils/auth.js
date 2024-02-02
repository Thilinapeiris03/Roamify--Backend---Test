const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();


passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID ,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.CLIENT_URL,
  passReqToCallback: true,
},

function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  // Deserialize the user based on the user ID stored in the session
  // For example, if you're using the user ID directly in the session:
  done(null, id);
});