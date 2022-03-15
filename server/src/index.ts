import { Application } from './app';
import { startConnection } from './database';

const app = new Application();
startConnection();

app.start();
