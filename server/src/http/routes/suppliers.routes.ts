import { Router } from 'express'

import listSupplierAction from '../actions/supplier/list.supplier.action';
import createSupplierAction from '../actions/supplier/create.supplier.action';

class SupplierRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', listSupplierAction.run);
    this.router.post('/', createSupplierAction.run)
  }
}

const supplierRouter = new SupplierRouter();
export default supplierRouter.router;
