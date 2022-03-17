import User from '../../domain/entities/user.entity';
import UserSchema from '../../models/user.model'

class UserRepository {
  private users: User[];

  constructor(){
    this.users = [];

    console.log(this.users)
  }

  async findAll(): Promise<User[]> {
    this.users = await UserSchema.find();
    return this.users;
  }

  async findOneById(id: String): Promise<User | null> {
    const user = UserSchema.findById(id);

    return user
  }

  async findOneByName(name: String): Promise<User | null> {
    const user = this.users.find(u => u.getName() === name)

    return (user) ? user : null
  }

  async createUser(user: User): Promise<void>{
    const userObj = new UserSchema(user);
    userObj.save();
  }

  async deleteById(id: String): Promise<void> {
    console.log(id)
  }

}

export default new UserRepository;