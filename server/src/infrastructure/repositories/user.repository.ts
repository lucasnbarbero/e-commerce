import { Request, Response } from "express";

import User from '../../domain/entities/user.entity';
import UserSchema from '../../models/user.model'

class UserRepository {
  private users: User[];

  constructor(){
    this.users = [];
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async createUser(user: User): Promise<void>{
    const userObj = new UserSchema(user);
    userObj.save();
    // this.users.push(user)
  }

}

export default new UserRepository;