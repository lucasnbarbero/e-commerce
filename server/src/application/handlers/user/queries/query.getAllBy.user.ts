import User from "../../../../domain/entities/user.entity";
import UserRepository from "../../../../infrastructure/repositories/user.repository";

class QueryGetUserAllBy {
  async getAllBy(name?: string, email?: string): Promise<User[]> {
    const users = await UserRepository.findAllBy(name, email);
    return users;
  }
}

export default new QueryGetUserAllBy;