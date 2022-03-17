import { Request, Response } from "express";
import DeleteUserHandler from "../../../application/handlers/user/delete.user.handler";
import { DeleteUserCommand } from "../../../application/commands/user/delete.user.command";
import User from "../../../models/user.model";

class DeleteUserAction {
  async run(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: user.name + " fue eliminado",
      });
    } catch (error) {
      return res.status(404).json({
        message: error,
      });
    }

    // const command: DeleteUserCommand = {
    //   id: req.params.id,
    // };

    // try {
    //   await DeleteUserHandler.execute(command);
    // } catch (error) {
    //   return res.status(404).json({
    //     message: error,
    //   });
    // };

    return res.status(200).send();
  }
}

export default new DeleteUserAction();
