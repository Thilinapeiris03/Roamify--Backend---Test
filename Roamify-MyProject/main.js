const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const rootRouter = require('./src/routes/rootRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", rootRouter);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`);
});
