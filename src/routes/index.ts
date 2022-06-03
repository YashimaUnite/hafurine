import { Router } from 'express';
import { wishesRouter } from './wishes';

export const createRouter = () => {
  const router = Router();

  router.use('/wishes', wishesRouter());

  return router;
};