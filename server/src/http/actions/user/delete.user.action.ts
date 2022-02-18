import { Request, Response } from 'express';
import DeleteUserHandler from "../../../application/handlers/user/delete.user.handler";
import { DeleteUserCommand } from "../../../application/commands/user/delete.user.command";

class DeleteUserAction {
  async run(req: Request, res: Response) {
    const command: DeleteUserCommand = {
      id: req.params.id,
    };

    try {
      await DeleteUserHandler.execute(command);

    } catch (error) {
      return res.status(400).json({
        message: error,
      });
    };

    return res.status(200).send();
  }
}

export default new DeleteUserAction();