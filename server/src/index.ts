import express, { Request, Response } from 'express';
import { log } from 'debug'
import cors from 'cors';
import expressWinston from 'express-winston';
import winston from 'winston';
import CommonRoutes from './http/routes/common.routes';


const app: express.Application = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
})

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if(!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server started on port 3000');;
});