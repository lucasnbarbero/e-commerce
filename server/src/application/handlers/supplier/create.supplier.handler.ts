import Supplier from "../../../domain/entities/supplier.entity";
import CreateSupplierCommand from "../../commands/supplier/create.supplier.command";
import SupplierRepository from "../../../infrastructure/repositories/supplier.repository";

class CreateSupplierHandler {

  async execute(command: CreateSupplierCommand) {
    const supplier: Supplier = new Supplier(
      command.getName(),
      command.getCuit(),
      command.getEmail(),
      command.getCustomerType(),
      command.getCityId(),
      command.getPhone(),
      command.getWeb()
    );

    await SupplierRepository.createSupplier(supplier);
  };

};

export default new CreateSupplierHandler();