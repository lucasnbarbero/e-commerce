import shortid from "shortid";

class User {
  private id: String;
  private name: String;

  constructor(name: String) {
    this.id = shortid.generate();
    this.name = name;
  };

  public getId(): String {
    return this.id;
  }

  public getName(): String {
    return this.name;
  }

  public setName(value: String): String {
    return this.name = value;
  }
}

export default User;