import ProductBrand from "../../../domain/entities/pruductBrand.entity";
import CreateProductBrandCommand from "../../commands/productBrand/create.productBrand.command";
import ProductBrandRepository from "../../../infrastructure/repositories/productBrand.repository";

class CreateUserHandler {
    async execute(command: CreateProductBrandCommand) {

        const productBrand: ProductBrand = new ProductBrand(
            command.getDescription()
        );

        await ProductBrandRepository.createProductBrand(productBrand);
    }
}

export default new CreateUserHandler();
