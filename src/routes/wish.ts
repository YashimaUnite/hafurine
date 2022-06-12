import { Router, Request, Response } from 'express';
import { Wish } from "../entity/wish";
import { WishService } from "../services/wishServices";

export const wishesRouter = () => {
  const wishService = new WishService();

  const router = Router();

  router.post('/new', (req: Request, res: Response) => {
    if (typeof req.body.userId !== "number" ||
    !Number.isInteger(req.body.userId)) {
      throw new Error("userId must be an integer");
    }
    if (typeof req.body.content !== "string") {
      throw new Error("content must be a string");
    }

    res.send('its /new')
  });

  router.delete('/delete', (req: Request, res: Response) => {
    if (typeof req.body.userId !== "number" ||
      !Number.isInteger(req.body.userId)) {
      throw new Error("userId must be an integer");
    }

    res.send('its /delete')
  });

  router.get('/list', (req: Request, res: Response) => {

  });

  router.post('/update', (req: Request, res: Response) => {

  });

  return router;
};