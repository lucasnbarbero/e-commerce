import { Router } from "express";
import createProductBrandAction from "../actions/productBrand/create.productBrand.action";
import listProductBradAction from "../actions/productBrand/list.productBrand.action";

class ProductBrandRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/', createProductBrandAction.run)
        this.router.get('/', listProductBradAction.run)
    }
}
const productBrandRouter = new ProductBrandRouter();
export default productBrandRouter.router;
