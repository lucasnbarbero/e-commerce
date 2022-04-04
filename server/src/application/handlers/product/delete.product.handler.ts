import ProductRepository from "../../../infrastructure/repositories/product.repository";
import { DeleteProductCommand } from "../../commands/product/delete.product.command";

class DeleteProductHandler {
    async execute(command: DeleteProductCommand) {
        const product = await ProductRepository.findOneById(command.id);

        if(!product) throw new Error('product not found');

        await ProductRepository.deleteById(command.id);
    }
}

export default new DeleteProductHandler();
