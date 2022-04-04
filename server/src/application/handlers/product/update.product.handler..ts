import UpdateProductCommand from "../../commands/product/update.product.command";
import ProductRepository from "../../../infrastructure/repositories/product.repository"


class UpdateProductHanlder {
    async execute(command: UpdateProductCommand) {
        const Product = await ProductRepository.findOneById(command.getId());
        if (!Product) throw new Error("Product not found");

        // const userRepited = await ProductRepository.findOneByEmail(command.getEmail());
        // if (userRepited) throw new Error("User repited");

        await ProductRepository.updateById(command.getId(), command);
    }
}

export default new UpdateProductHanlder();
