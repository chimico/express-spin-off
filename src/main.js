const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const serveStatic = require('serve-static');

const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(serveStatic('docs'));

// routes
routes(app);

module.exports = app;
