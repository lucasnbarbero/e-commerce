import { Request, Response } from "express";
import UpdateProductCommand from "../../../application/commands/product/update.product.command";
import UpdateProductHandler from "../../../application/handlers/product/update.product.handler."

class UpdateUserAction {
    async run(req: Request, res: Response) {
        const command: UpdateProductCommand = new UpdateProductCommand(
            req.params.id,
            req.body.description,
            req.body.price,
            req.body.costMediumPrice,
            req.body.marginPercentage,
            req.body.salesPriceWithoutTaxes,
            req.body.quantity,
            req.body.amount,
            req.body.minimalExistence,
            req.body.code,
            req.body.salesPriceWithTaxes

        )

        try {
            await UpdateProductHandler.execute(command)
            res.status(200).json({
                message: 'product update',
                user: command
            })
        } catch (error) {
            res.status(400).json({
                message: error + ' Error'
            })
        }

    }
}

export default new UpdateUserAction();
