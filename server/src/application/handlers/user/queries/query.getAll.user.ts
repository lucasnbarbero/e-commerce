import User from "../../../../domain/entities/user.entity";
import UserRepository from "../../../../infrastructure/repositories/user.repository";

class QueryGetAllUser {
  async getAll(): Promise<User[]> {
    const users = await UserRepository.findAll();
    console.log(users)
    return users;
  }
}

export default new QueryGetAllUser;