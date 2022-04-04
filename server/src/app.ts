import express from "express";
import morgan from "morgan";
import cors from "cors";
// IMPORT ROUTES
import UserRoutes from "./http/routes/user.routes";
import SuppliersRoutes from "./http/routes/suppliers.routes";
import ProductRoutes from "./http/routes/product.routes";
import ProductBrandsRoutes from "./http/routes/productBrand.routes";
// import expressWinston from "express-winston";
// import winston from "winston";
// import CommonRoutes from "./http/routes/common.routes";

//  I
class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings(): void {
    this.app.set('port', process.env.PORT ||3000);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(cors());


    // this.app.use(expressWinston.logger({
    //   transports: [
    //     new winston.transports.Console()
    //   ],
    //   format: winston.format.combine(
    //     winston.format.colorize(),
    //     winston.format.json()
    //   ),
    // }));

  }
  // not work for CommonRoutes
  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use('/users', UserRoutes)
    this.app.use('/suppliers', SuppliersRoutes)
    this.app.use('/products', ProductRoutes)
    this.app.use('/productBrands', ProductBrandsRoutes)
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on port ${this.app.get('port')}`);
    });
  }
}

export { Application };
