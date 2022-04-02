import { Request, Response } from "express";
import QueryGetAllProduct from '../../../application/handlers/product/queries/query.getAll.product';
import Product from '../../../domain/entities/product.entity';

class ListProductAction {
  async run(req: Request, res: Response) {
    const Product: Product[] = await QueryGetAllProduct.getAll();
    return res.status(200).json(Product);
  }
}

export default new ListProductAction();
