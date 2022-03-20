import { Request, Response } from "express";
import CreateSupplierCommand from "../../../application/commands/supplier/create.supplier.command";
import CreateSupplierHandler from "../../../application/handlers/supplier/create.supplier.handler";

class CreateSupplierAction {

  async run(req: Request, res: Response) {
    const command: CreateSupplierCommand = new CreateSupplierCommand(
      req.body.name,
      req.body.cuit,
      req.body.email,
      req.body.customerType,
      req.body.cityId,
      req.body.phone,
      req.body.web
    );

    if(!command.getName()) {
      return res.status(400).json({
        message: 'The name is required',
      });
    };

    try {
      await CreateSupplierHandler.execute(command);

    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error + '. This supplier was already created',
        response: command
      })
    };

    return res.status(200).json({
      message: 'Supplier created',
      response: command
    });
  };
};

export default new CreateSupplierAction();