import { Request, Response } from "express";
import UpdateUserCommand from "../../../application/commands/user/update.user.command";
import UpdateUserHandler from "../../../application/handlers/user/update.user.handler";

class UpdateUserAction {
  async run(req: Request, res: Response) {
    const command: UpdateUserCommand = new UpdateUserCommand (
      req.body.id,
      req.body.name,
    );

    try {
      await UpdateUserHandler.execute(command);
    } catch (error) {
      return res.status(400).json({
        message: error,
      });
    };

    return res.status(200).json({
      message: 'User update',
    })
  }
}

export default new UpdateUserAction();