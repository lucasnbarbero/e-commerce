import { Request, Response } from "express";
import UpdateUserCommand from "../../../application/commands/user/update.user.command";
import UpdateUserHandler from "../../../application/handlers/user/update.user.handler";
import User from "../../../models/user.model";

class UpdateUserAction {
  async run(req: Request, res: Response) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).json({
        message: "El usuario fue modificado correctamente",
        user: user,
      });
    } catch (error) {
      return res.status(400).json({
        message: error,
      });
    }
  }
}

export default new UpdateUserAction();
