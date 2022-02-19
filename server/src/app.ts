import express from "express";
import morgan from "morgan";
import cors from "cors";
import expressWinston from "express-winston";
import winston from "winston";
// import CommonRoutes from "./http/routes/common.routes";

class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', 3000);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
    }));
  }
  // not work for CommonRoutes 
  routes() {
    this.app.use('/', (req, res) => {
      res.send("hello toDo.web!");
    });
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on port ${this.app.get('port')}`);
    });
  }
}

export default Application;
