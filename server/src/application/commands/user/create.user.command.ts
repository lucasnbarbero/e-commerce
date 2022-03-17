class CreateUserCommand {
  private name: string;
  private email: string;
  private password: string;
  private isAdmin: boolean;
  private isSeller: boolean;
  private seller: object;

  constructor(
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isSeller: boolean,
    seller: object
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.isSeller = isSeller;
    this.seller = seller;
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

  public getSeller(): object {
    return this.seller;
  }
}

export default CreateUserCommand;
