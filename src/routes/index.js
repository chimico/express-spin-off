const helloRouter = require('./hello.js');

const notFoundRouter = function notFoundRouteTreatment(req, res) {
  return res.status(404).json({ message: 'This route does not exist!' });
};

const invalidRouter = function invalidRouteTreatment(req, res) {
  return res.status(400).json({ message: 'This route is invalid!' });
};

module.exports = (app) => {
  /**
   * Set hello routes to "/v1/hello"
   */
  app.use('/v1/hello', helloRouter);
  app.use('/v1/hello', invalidRouter);

  app.use(notFoundRouter);
};
