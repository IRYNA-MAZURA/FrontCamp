const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router');
const logger = require('./logger');

app.set('views', './views')
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use((req, res, next) => {
  logger.info(`Method: ${req.method}, Url: ${req.url}, Date: ${(new Date()).toLocaleTimeString()}`);

  next();
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

app.use('/news', router);

app.use((req, res, next) => {
  logger.warn(
    'Unhandled resource',
    {
        status: 400,
        error: 'Unknown resource',
        resource: req.originalUrl
    }
);
  res.render('error', {error: { status: 400, message: 'Unknown resource' }});
})

app.use((err, req, res, next) => {
  logger.log('error',
  {
    status: 500,
    error: err,
    resource: req.originalUrl
  });

  res.render('error', { error: { status: 500, message: err }});
});
