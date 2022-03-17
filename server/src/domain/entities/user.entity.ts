class User {
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

  //  GETTERS

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

  //  SETTERS
  public setName(value: string): string {
    return (this.name = value);
  }

  public setEmail(value: string): string {
    return (this.email = value);
  }

  public setPassword(value: string): string {
    return (this.password = value);
  }

  public setIsAdmin(value: boolean): boolean {
    return (this.isAdmin = value);
  }

  public setIsSeller(value: boolean): boolean {
    return (this.isSeller = value);
  }

  public setSeller(value: object): object {
    return (this.seller = value);
  }
}

export default User;
