import Router from 'express';
import Hello from '../services/hello.js';

const router = Router();

/**
 * Set a GET route
 */
router.get('', (req, res) => {
  return res.json(Hello.hello());
});

export default router;
