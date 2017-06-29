import helloRouter from './hello.js';

export default app => {
  /**
   * Set hello routes to "/v1/hello"
   */
  app.use('/v1/hello', helloRouter);
}
