import shortid from "shortid";

class User {
  private name: String;

  constructor(name: String) {
    this.name = name;
  };

  public getName(): String {
    return this.name;
  }

  public setName(value: String): String {
    return this.name = value;
  }
}

export default User;