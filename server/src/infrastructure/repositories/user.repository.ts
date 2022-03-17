import UpdateUserCommand from '../../application/commands/user/update.user.command';
import User from '../../domain/entities/user.entity';
import UserSchema from '../models/user.model'

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
  async findOneById(id: string): Promise<User | null> {
    const user = UserSchema.findById(id);
    return user
  }

  //  BUSCAR POR NOMBRE
  async findOneByName(name: string): Promise<User | null> {
    const user = UserSchema.findOne({name: name})
    return user
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const user = UserSchema.findOne({email: email});
    return user;
  }


  //  CREAR REGISTRO
  async createUser(user: User): Promise<void>{
    const userObj = new UserSchema(user);
    userObj.save();
  }


  //  ELIMINAR REGISTRO
  async deleteById(id: string): Promise<void> {
    const user = await UserSchema.findByIdAndDelete(id)
    return user;
  }

  async updateByid(id: string, command: UpdateUserCommand): Promise<User | null> {
    const user = await UserSchema.findByIdAndUpdate(id, command);
    return user;
  }

}

export default new UserRepository;