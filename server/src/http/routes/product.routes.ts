import { Router } from "express";

import listProductAction from "../actions/product/list.product.action";
import createProductAction from "../actions/product/create.product.action";
// import deleteProductAction from "../actions/Product/delete.Product.action";
// import updateProductAction from "../actions/Product/update.Product.action";


class ProductRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
   this.router.get('/', listProductAction.run)
    this.router.post('/', createProductAction.run)
    // this.router.put('/:id', updateProductAction.run)
    // this.router.delete('/:id', deleteProductAction.run)
  }

}

const productRouter = new ProductRouter();
export default productRouter.router;
