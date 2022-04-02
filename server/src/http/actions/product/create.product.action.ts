import { Request, Response } from "express";
import CreateProductCommand from "../../../application/commands/product/create.product.command";
import CreateProductHandler from "../../../application/handlers/product/create.product.handler";

class CreateProductAction {

  async run(req: Request, res: Response) {
    const command: CreateProductCommand = new CreateProductCommand(
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
    );

    //VER LAS VALIDACIONES
    if (!command.getDescription()) {
      return res.status(400).json({
        message: 'The Productname is required',
      })
    }

    try {
      await CreateProductHandler.execute(command);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error + ". This Product was already created",
        response: command
      });
    }

    return res.status(200).json({
      message: "Product created",
      Product: command
    });
  }
}

export default new CreateProductAction();
