import User from "../../../domain/entities/user.entity";
import CreateUserCommand from "../../commands/user/create.user.command";
import UserRepository from "../../../infrastructure/repositories/user.repository";


class CreateUserHandler {
  async execute(command: CreateUserCommand) {

    const user: User = new User(command.getName());

    await UserRepository.createUser(user);
  }
}

export default new CreateUserHandler();