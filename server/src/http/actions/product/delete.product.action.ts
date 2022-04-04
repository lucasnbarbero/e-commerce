import { Request, Response } from "express";
import DeleteProductHandler from "../../../application/handlers/product/delete.product.handler";
import { DeleteProductCommand } from "../../../application/commands/product/delete.product.command";

class DeleteProductAction {
    async run(req: Request, res: Response) {
        const command: DeleteProductCommand = {
            id: req.params.id,
        };

        try {
            await DeleteProductHandler.execute(command);

            res.status(200).json({
                message: 'Product deleted'
            })
        } catch (error) {
            return res.status(404).json({
                message: error,
            });
        };

        return res.status(200).send();
    }
}

export default new DeleteProductAction();
