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
    this.app.set('port', process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(morgan('dev'));
  };

  routes() {
    this.app.use(indexRoutes)
  };

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server started on port', this.app.get('port'));
    });
  }

}

export default Application;