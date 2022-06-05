import { Router } from 'express';
import { wishesRouter } from './wish';

export const createRouter = () => {
  const router = Router();

  router.use('/wish', wishesRouter());

  return router;
};