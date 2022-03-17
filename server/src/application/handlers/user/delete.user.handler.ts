import UserRepository from "../../../infrastructure/repositories/user.repository";
import { DeleteUserCommand } from "../../commands/user/delete.user.command";

class DeleteUserHandler {
  async execute(command: DeleteUserCommand) {
    const user = await UserRepository.findOneById(command.id);

    if(!user) throw new Error('User not found');

    await UserRepository.deleteById(command.id);
  }
}

export default new DeleteUserHandler();