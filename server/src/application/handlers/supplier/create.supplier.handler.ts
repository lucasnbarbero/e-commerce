import Supplier from "../../../domain/entities/supplier.entity";
import CreateSupplierCommand from "../../commands/supplier/create.supplier.command";
import SupplierRepository from "../../../infrastructure/repositories/supplier.repository";

class CreateSupplierHandler {

  async execute(command: CreateSupplierCommand) {
    const supplier: Supplier = new Supplier(
      command.businessName,
      command.tradename,
      command.cuit,
      command.address,
      command.country,
      command.province,
      command.city,
      command.postalCode,
      command.phone,
      command.cellPhone,
      command.email,
      command.web,
      command.observations,
      command.wayToPay,
      command.taxable,
      command.condition,
    );

    await SupplierRepository.createSupplier(supplier);
  };

};

export default new CreateSupplierHandler();