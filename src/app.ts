import express from 'express';
import cors from 'cors';
import { createRouter } from "./routes";
import { AppDataSource } from "./data-source";
AppDataSource.initialize().then(() => {
  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));

  const port = 3000;

  app.use('/', createRouter());

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
  });
}).catch((error: any) => {
    console.log(`${error}`);
});