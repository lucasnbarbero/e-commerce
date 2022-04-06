import { Request, Response } from "express";
import CreateSupplierCommand from "../../../application/commands/supplier/create.supplier.command";
import CreateSupplierHandler from "../../../application/handlers/supplier/create.supplier.handler";

class CreateSupplierAction {
  async run(req: Request, res: Response) {
    const command: CreateSupplierCommand = new CreateSupplierCommand(
      req.body.businessName,
      req.body.tradename,
      req.body.cuit,
      req.body.address,
      req.body.country,
      req.body.province,
      req.body.city,
      req.body.postalCode,
      req.body.phone,
      req.body.cellPhone,
      req.body.email,
      req.body.web,
      req.body.observations,
      req.body.wayToPay,
      req.body.taxable,
      req.body.condition
    );

    if (!command.cuit) {
      return res.status(400).json({
        message: "The CUIT is required",
      });
    }

    if (!command.businessName) {
      return res.status(400).json({
        message: "The businessName is required",
      });
    }

    try {
      console.log(command);
      await CreateSupplierHandler.execute(command);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error + ". This supplier was already created",
        response: command,
      });
    }

    return res.status(200).json({
      message: "Supplier created",
      response: command,
    });
  }
}

export default new CreateSupplierAction();
