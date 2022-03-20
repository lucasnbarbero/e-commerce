import Supplier from '../../domain/entities/supplier.entity';
import SupplierSchema from '../models/supplier.model'

class SupplierRepository {
  private suppliers: Supplier[];

  constructor() {
    this.suppliers = [];
    console.log(this.suppliers);
  }

  async findAll(): Promise<Supplier[]> {
    this.suppliers = await SupplierSchema.find()
    return this.suppliers;
  }

  async createSupplier(supplier: Supplier): Promise<void> {
    const supplierObj = new SupplierSchema(supplier);
    supplierObj.save();
  }
   
}

export default new SupplierRepository;