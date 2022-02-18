import { Request, Response } from 'express'
import User from '../../../domain/entities/user.entity'
import UserRepository from '../../../infrastructure/repositories/user.repository'

class ListUserAction {
  async run(req: Request, res: Response) {
    const user: User[] = await UserRepository.findAll();
    return res.status(200).json(user);
  }
}

export default new ListUserAction();