import User from "../../../../domain/entities/user.entity";
import UserRepository from "../../../../infrastructure/repositories/user.repository";

class QueryGetUserById {
  async getUserById(id: string): Promise<User | null> {
    const user = await UserRepository.findOneById(id);
    return user;
  }
}

export default new QueryGetUserById;