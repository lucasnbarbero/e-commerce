class Supplier {
  private name: string;
  private cuit: string;
  private email: string;
  private customerType: string;
  private cityId: string;
  private phone: string;
  private web: string;

  constructor(
    name: string,
    cuit: string,
    email: string,
    customerType: string,
    cityId: string,
    phone: string,
    web: string,
  ) {
    this.name = name;
    this.cuit = cuit;
    this.email = email;
    this.customerType = customerType;
    this.cityId = cityId;
    this.phone = phone;
    this.web = web;
  }

  public getName(): string{
    return this.name;
  }

  public getCuit(): string {
    return this.cuit;
  }

  public getEmail(): string {
    return this.email;
  }

  public getCustomerType(): string {
    return this.customerType;
  }

  public getCityId(): string {
    return this.cityId;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getWeb(): string {
    return this.web;
  }


}

export default Supplier;