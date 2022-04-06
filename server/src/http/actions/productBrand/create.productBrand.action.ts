import { Request, Response } from "express";
import CreateProductBrandCommand from "../../../application/commands/productBrand/create.productBrand.command"
import CreateProductBrandHandler from "../../../application/handlers/productBrand/create.productBrand.handler";

class CreateUserAction {

  async run(req: Request, res: Response) {
    const command: CreateProductBrandCommand = new CreateProductBrandCommand(
      req.body.description
    );

    try {
      await CreateProductBrandHandler.execute(command);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error + ". This productBrand was already created",
        response: command
      });
    }

    return res.status(200).json({
      message: "productBrand created",
      user: command
    });
  }
}

export default new CreateUserAction();
