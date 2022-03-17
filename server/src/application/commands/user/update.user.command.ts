
class UpdateUserCommand {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private isAdmin: boolean;
  private isSeller: boolean;
  // private seller: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isSeller: boolean,
    // seller: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.isSeller = isSeller;
    // this.seller = seller;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  public getIsSeller(): boolean {
    return this.isSeller;
  }

  // public getSeller(): string {
  //   return this.seller;
  // }
}

export default UpdateUserCommand;
