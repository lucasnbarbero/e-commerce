class User {
  private name: String;
  private email: String;
  private password: String;
  private isAdmin: Boolean;
  private isSeller: Boolean;
  private seller: Object;

  constructor(
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    isSeller: Boolean,
    seller: Object
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.isSeller = isSeller;
    this.seller = seller;
  }

  //  GETTERS

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

  public getSeller(): Object {
    return this.seller;
  }

  //  SETTERS
  public setName(value: String): String {
    return (this.name = value);
  }

  public setEmail(value: String): String {
    return (this.email = value);
  }

  public setPassword(value: String): String {
    return (this.password = value);
  }

  public setIsAdmin(value: Boolean): Boolean {
    return (this.isAdmin = value);
  }

  public setIsSeller(value: Boolean): Boolean {
    return (this.isSeller = value);
  }

  public setSeller(value: Object): Object {
    return (this.seller = value);
  }
}

export default User;
