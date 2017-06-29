import Router from 'express';

const router = Router();

/**
 * Set a GET route
 */
router.get('', (req, res) => {
  return res.json('Hello from the API!');
});

export default router;
