import { Request, Response } from "express";
import CreateUserCommand from "../../../application/commands/user/create.user.command";
import CreateUserHandler from "../../../application/handlers/user/create.user.handler";

class CreateUserAction {
  async run(req: Request, res: Response) {
    const command: CreateUserCommand = new CreateUserCommand(
      req.body.name
    );

    if(!command.getName()) {
      return res.status(400).json({
        message: 'Required fields'
      })
    };

    try {
      await CreateUserHandler.execute(command);

    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error + 'This user was already created'
      });
    };

    return res.status(200).json({
      message: 'User created'
    })
  }
}

export default new CreateUserAction();