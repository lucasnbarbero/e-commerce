import { Request, Response } from "express";
import QueryGetAllSupplier from '../../../application/handlers/supplier/queries/query.getAll.supplier';
import Supplier from '../../../domain/entities/supplier.entity';

class ListSupplierAction {
  async run(req: Request, res: Response) {
    const supplier: Supplier[] = await QueryGetAllSupplier.getAll();
    return res.status(200).json(supplier);
  }
}

export default new ListSupplierAction();
