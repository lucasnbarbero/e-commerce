import User from "../../../domain/entities/user.entity";
import CreateUserCommand from "../../commands/user/create.user.command";
import UserRepository from "../../../infrastructure/repositories/user.repository";

class CreateUserHandler {
  async execute(command: CreateUserCommand) {
    if (await UserRepository.findOneByName(command.getName())) {
      throw new Error("This username already exists");
    }

    if (await UserRepository.findOneByEmail(command.getEmail())) {
      throw new Error("This email already exists")
    }

    const user: User = new User(
      command.getName(),
      command.getEmail(),
      command.getPassword(),
      command.getIsAdmin(),
      command.getIsSeller(),
      command.getSeller()
    );

    await UserRepository.createUser(user);
  }
}

export default new CreateUserHandler();
