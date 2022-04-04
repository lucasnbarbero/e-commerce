import Product from "../../../domain/entities/product.entity"
import CreateProductCommand from "../../commands/product/create.product.command"
import ProductRepository from "../../../infrastructure/repositories/product.repository"


class CreateProductHandler {

    async execute(command: CreateProductCommand) {
        // if (await ProductRepository.(VALIDACIONES)) {
        //   throw new Error("VALIDACIONES);
        // }

    const product: Product = new Product(
      command.getDescription(),
      command.getPrice(),
      command.getCostmediumPrice(),
      command.getMarginPercentage(),
      command.getSalesPriceWithoutTaxes(),
      command.getQuantity(),
      command.getAmount(),
      command.getMinimalExistence(),
      command.getSalesPriceWithTaxes(),
      command.getCode()
    );

    await ProductRepository.createProduct(product);
  }
}

export default new CreateProductHandler();
