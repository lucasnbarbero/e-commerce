import User from '../../domain/entities/user.entity';
import UserSchema from '../../models/user.model'

class UserRepository {
  private users: User[];

  constructor(){
    this.users = [];
  }

  async findAll(): Promise<User[]> {
    this.users = await UserSchema.find();
    return this.users;
  }

  async createUser(user: User): Promise<void>{
    const userObj = new UserSchema(user);
    userObj.save();
  }

}

export default new UserRepository;