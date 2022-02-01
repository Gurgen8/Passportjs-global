const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID ="398688629185-73fn5a2re1gjvlhie25cnjekmm0lgfuc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "8aa232b32bef4440ffb0";
const GITHUB_CLIENT_SECRET = "1e1bbaa23a6b4ff23bc532adca14736736f5592d";

const FACEBOOK_APP_ID = "500851471713274";
const FACEBOOK_APP_SECRET = "e2eec5c70210321076caa769f07b9b8e";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
