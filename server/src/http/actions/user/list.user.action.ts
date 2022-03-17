import { Request, Response } from "express";
import QueryGetAllUser from "../../../application/handlers/user/queries/query.getAll.user";
import User from "../../../domain/entities/user.entity";

class ListUserAction {
  async run(req: Request, res: Response) {
    const user: User[] = await QueryGetAllUser.getAll();
    return res.status(200).json(user);
  }
}


export default new ListUserAction();
