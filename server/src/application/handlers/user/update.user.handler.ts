import UpdateUserCommand from "../../commands/user/update.user.command";
import UserRepository from "../../../infrastructure/repositories/user.repository";

class UpdateUserHanlder {
  async execute(command: UpdateUserCommand) {
    const user = await UserRepository.findOneById(command.getId());

    if(!user) {
      throw new Error('User not found');
    }
    else {
      user.setName(command.getName());
      await UserRepository.update(user);
    }
  }
}

export default new UpdateUserHanlder();