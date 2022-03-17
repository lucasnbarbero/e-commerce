import UpdateUserCommand from '../../application/commands/user/update.user.command';
import User from '../../domain/entities/user.entity';
import UserSchema from '../../models/user.model'

class UserRepository {
  private users: User[];

  //  CONSTRUCTOR
  constructor(){
    this.users = [];
    console.log(this.users)
  }


  //  BUSCAR TODOS
  async findAll(): Promise<User[]> {
    this.users = await UserSchema.find();
    return this.users;
  }


  //  BUSCAR POR ID
  async findOneById(id: String): Promise<User | null> {
    const user = UserSchema.findById(id);
    return user
  }


  //  BUSCAR POR NOMBRE
  async findOneByName(name: String): Promise<User | null> {
    const user = this.users.find(u => u.getName() === name)
    return (user) ? user : null
  }


  //  CREAR REGISTRO
  async createUser(user: User): Promise<void>{
    const userObj = new UserSchema(user);
    userObj.save();
  }


  //  ELIMINAR REGISTRO
  async deleteById(id: String): Promise<void> {
    const user = await UserSchema.findByIdAndDelete(id)
    return user;
  }

  async updateByid(id: String, command: UpdateUserCommand): Promise<User | null> {
    console.log(id)
    console.log(command)
    const user = await UserSchema.findByIdAndUpdate(id, command);
    return user;
  }

}

export default new UserRepository;