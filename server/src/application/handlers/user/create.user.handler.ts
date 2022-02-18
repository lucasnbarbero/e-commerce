import User from "../../../domain/entities/user.entity";
import CreateUserCommand from "../../commands/user/create.user.command";
import UserRepository from "../../../infrastructure/repositories/user.repository";


class CreateUserHandler {
  async execute(command: CreateUserCommand) {
    if(await UserRepository.findOneByName(command.getName())) {
      throw new Error('User not found');
    }

    const user: User = new User(command.getName());

    await UserRepository.save(user);
  }
}

export default new CreateUserHandler();