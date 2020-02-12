const Router = require('express');

const Hello = require('../services/hello.js');

const router = Router();

/**
 * @api {get} /v1/hello Send hello to client
 * @apiName GetHello
 * @apiGroup Hello
 *
 * @apiSuccessExample Success-response:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       message: 'Hello from the API!'
 *     }
 *   ]
 */
router.get('', (req, res) => {
  const helloService = new Hello();

  return res.json(helloService.hello());
});

module.exports = router;
