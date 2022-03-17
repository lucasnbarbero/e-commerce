import { Request, Response } from "express";
import CreateUserCommand from "../../../application/commands/user/create.user.command";
import CreateUserHandler from "../../../application/handlers/user/create.user.handler";

class CreateUserAction {

  async run(req: Request, res: Response) {
    const command: CreateUserCommand = new CreateUserCommand(
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.isAdmin,
      req.body.isSeller,
      req.body.seller
    );

    if (!command.getName()) {
      return res.status(400).json({
        message: 'The username is required',
      })
    }

    try {
      await CreateUserHandler.execute(command);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error + ". This user was already created",
        response: command
      });
    }

    return res.status(200).json({
      message: "User created",
      user: command
    });
  }
}

export default new CreateUserAction();
