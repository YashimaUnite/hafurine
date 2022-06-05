import { Router, Request, Response } from 'express';

export const wishesRouter = () => {
  const router = Router();

  router.get('/new', (req: Request, res: Response) => {

  });

  router.get('/delete', (req: Request, res: Response) => {

  });

  router.get('/list', (req: Request, res: Request) => {

  });

  return router;
};