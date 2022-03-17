
class UpdateUserCommand {
  private id: string;
  private name: String;
  private email: String;
  private password: String;
  private isAdmin: Boolean;
  private isSeller: Boolean;
  // private seller: String;

  constructor(
    id: string,
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    isSeller: Boolean,
    // seller: String
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.isSeller = isSeller;
    // this.seller = seller;
  }

  public getId(): String {
    return this.id;
  }

  public getName(): String {
    return this.name;
  }

  public getEmail(): String {
    return this.email;
  }

  public getPassword(): String {
    return this.password;
  }

  public getIsAdmin(): Boolean {
    return this.isAdmin;
  }

  public getIsSeller(): Boolean {
    return this.isSeller;
  }

  // public getSeller(): String {
  //   return this.seller;
  // }
}

export default UpdateUserCommand;
