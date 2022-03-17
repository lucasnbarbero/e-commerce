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
  async findOneById(id: string): Promise<User | null> {
    const user = UserSchema.findById(id);
    return user
  }

  //  BUSCAR POR NOMBRE
  async findOneByName(name: string): Promise<User | null> {
    const user = UserSchema.findOne({name: name})
    return user
  }
  

  async findAllBy(name?: string, email?: string): Promise<User[]> {
    let query = this.users;

    if(name) query = query.filter(u => name.includes(u.getName()));

    if(email) query = query.filter(u => email.includes(u.getEmail()));
    
    return query;
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