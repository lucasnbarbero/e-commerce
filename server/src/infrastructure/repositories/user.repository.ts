import User from "../../domain/entities/user.entity";

class UserRepository {
  private users: User[];

  constructor () {
    this.users = [];

    console.log(this.users);
  };


  //  FIND ALL
  async findAll(): Promise<User[]> {
    return this.users;
  };


  // FIND ONE BY ID
  async findOneById(id: string): Promise<User | null> {
    const user = this.users.find(u => u.getId() === id);

    return (user) ? user : null;
  };


  //  FIND ONE BY NAME
  async findOneByName(name: string): Promise<User | null> {
    const user = this.users.find(u => u.getName() === name);

    return (user) ? user : null;
  }


  // SAVE USER
  async save(user: User): Promise<void>{
    this.users.push(user);
  };


  //  UPDATE USER
  async update(user: User): Promise<void> {
    this.users = this.users.map(function(u) {
      return u.getId() === user.getId() ? user : u;
    });
  };


  //  DELETE USER
  async deleteById(id: string): Promise<void>{
    this.users = this.users.filter(u => u.getId() !== id);
  };
}

export default new UserRepository;