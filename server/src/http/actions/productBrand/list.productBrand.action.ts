import { Request, Response } from "express";
import QueryGetAllProductBrands from '../../../application/handlers/productBrand/queries/query.getAll.producBrand';
import ProductBrand from '../../../domain/entities/pruductBrand.entity';

class ListProductBrandAction {
    async run(req: Request, res: Response) {
        const productBrand: ProductBrand[] = await QueryGetAllProductBrands.getAll();
        return res.status(200).json(productBrand);
    }
}

export default new ListProductBrandAction();
