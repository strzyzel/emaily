const express       = require("express"),
      mongoose      = require('mongoose'),
      cookieSession = require('cookie-session'),
      passport      = require('passport'),
      keys          = require('./config/keys');
      require('./models/user');
      require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

console.log("Server started!");
app.listen(process.env.PORT, process.env.IP);