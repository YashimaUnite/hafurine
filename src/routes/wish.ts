import { Router, Request, Response } from 'express';

export const wishesRouter = () => {
  const router = Router();

  router.post('/new', (req: Request, res: Response) => {
    console.dir(req.body);
    res.send('Go back now!! now!!')
  });

  router.delete('/delete', (req: Request, res: Response) => {

  });

  router.get('/list', (req: Request, res: Response) => {

  });

  router.post('/update', (req: Request, res: Response) => {

  });

  return router;
};