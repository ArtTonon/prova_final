import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import jogadorRouter from './src/routes/jogadorRouter';

createConnection().then(async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(jogadorRouter);

  app.listen(38000, () => {
    console.log('Server is running on port 38000');
  });
}).catch(error => console.log(error));
