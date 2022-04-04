import { Router } from "express";

import createProductBrandAction from "../actions/productBrand/create.productBrand.action";


class ProductBrandRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/', createProductBrandAction.run)
    }

}

const productBrandRouter = new ProductBrandRouter();
export default productBrandRouter.router;
