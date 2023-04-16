import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 5000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Project Starter test1...,,,,,,,,test......');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
