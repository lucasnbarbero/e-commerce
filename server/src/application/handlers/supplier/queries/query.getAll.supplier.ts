import Supplier from '../../../../domain/entities/supplier.entity'
import SupplierRepository from '../../../../infrastructure/repositories/supplier.repository'

class QueryGetAllSupplier {
  async getAll(): Promise<Supplier[]> {
    const suppliers = await SupplierRepository.findAll();
    return suppliers;
  }
}

export default new QueryGetAllSupplier;