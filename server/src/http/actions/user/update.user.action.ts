import { Request, Response } from "express";
import UpdateUserCommand  from "../../../application/commands/user/update.user.command";
import UpdateUserHandler from "../../../application/handlers/user/update.user.handler";

class UpdateUserAction {
  async run(req: Request, res: Response) {
    const command: UpdateUserCommand = new UpdateUserCommand(
      req.params.id,
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.isAdmin,
      req.body.isSeller
      // req.body.seller
    )

    try {
      await UpdateUserHandler.execute(command)
      res.status(200).json({
        message: 'User update',
        user: command
      })
    } catch (error) {
      res.status(400).json({
        message: error + ' Error'
      })
    }

    // try {
    //   const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true,
    //   });

    //   res.status(200).json({
    //     message: "El usuario fue modificado correctamente",
    //     user: user,
    //   });
    // } catch (error) {
    //   return res.status(400).json({
    //     message: error,
    //   });
    // }
  }
}

export default new UpdateUserAction();
