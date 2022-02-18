import express from 'express';
import morgan from 'morgan';

// Routes import
import indexRoutes from './routes';

class Application {
  
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    const portDefault = 3000;
    this.app.set('port', process.env.PORT || portDefault);
  }

  middlewares() {
    this.app.use(morgan('dev'));
  }

  routes() {
    this.app.use(indexRoutes)
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server started on port: ', this.app.get('port'));
    });
  }

}

export default Application;