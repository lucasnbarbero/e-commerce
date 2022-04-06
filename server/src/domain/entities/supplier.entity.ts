class Supplier {
  
  /*    BUSINESS NAME    */
  private _businessName : string;
  public get businessName() : string {
    return this._businessName;
  }
  public set businessName(v : string) {
    this._businessName = v;
  }
  
  /*    TRADENAME    */
  private _tradename : string;
  public get tradename() : string {
    return this._tradename;
  }
  public set tradename(v : string) {
    this._tradename = v;
  }
  
  
  /*    CUIT    */
  private _cuit : string;
  public get cuit() : string {
    return this._cuit;
  }
  public set cuit(v : string) {
    this._cuit = v;
  }
  
  
  /*    ADDRESS    */
  private _address : string;
  public get address() : string {
    return this._address;
  }
  public set address(v : string) {
    this._address = v;
  }
  
  
  /*    COUNTRY    */
  private _country : string;
  public get country() : string {
    return this._country;
  }
  public set country(v : string) {
    this._country = v;
  }
  
  /*    PROVINCE    */
  private _province : string;
  public get province() : string {
    return this._province;
  }
  public set province(v : string) {
    this._province = v;
  }
  
  
  /*    CITY    */
  private _city : string;
  public get city() : string {
    return this._city;
  }
  public set city(v : string) {
    this._city = v;
  }
  
  
  /*    POSTAL CODE    */
  private _postalCode : string;
  public get postalCode() : string {
    return this._postalCode;
  }
  public set postalCode(v : string) {
    this._postalCode = v;
  }
  

  /*    PHONE    */
  private _phone : string;
  public get phone() : string {
    return this._phone;
  }
  public set phone(v : string) {
    this._phone = v;
  }
  

  /*    CELL PHONE    */
  private _cellPhone : string;
  public get cellPhone() : string {
    return this._cellPhone;
  }
  public set cellPhone(v : string) {
    this._cellPhone = v;
  }
  

  /*    EMAIL    */
  private _email : string;
  public get email() : string {
    return this._email;
  }
  public set email(v : string) {
    this._email = v;
  }
  

  /*    WEB    */
  private _web : string;
  public get web() : string {
    return this._web;
  }
  public set web(v : string) {
    this._web = v;
  }
  

  /*    OBSERVATIONS    */
  private _observations : string;
  public get observations() : string {
    return this._observations;
  }
  public set observations(v : string) {
    this._observations = v;
  }
  
  
  /*    WAY TO PAY    */
  private _wayToPay : string;
  public get wayToPay() : string {
    return this._wayToPay;
  }
  public set wayToPay(v : string) {
    this._wayToPay = v;
  }
  
  
  /*    TAXABLE    */
  private _taxable : string;
  public get taxable() : string {
    return this._taxable;
  }
  public set taxable(v : string) {
    this._taxable = v;
  }
  

  /*    CONDITION    */
  private _condition : string;
  public get condition() : string {
    return this._condition;
  }
  public set condition(v : string) {
    this._condition = v;
  }

  constructor(
    businessName: string,
    tradename: string,
    cuit: string,
    address: string,
    country: string,
    province: string,
    city: string,
    postalCode: string,
    phone: string,
    cellPhone: string,
    email: string,
    web: string,
    observations: string,
    wayToPay: string,
    taxable: string,
    condition: string,
  ) {
    this._businessName = businessName;
    this._tradename = tradename;
    this._cuit = cuit;
    this._address = address;
    this._country = country;
    this._province = province;
    this._city = city;
    this._postalCode = postalCode;
    this._phone = phone;
    this._cellPhone = cellPhone;
    this._email = email;
    this._web = web;
    this._observations = observations;
    this._wayToPay = wayToPay;
    this._taxable = taxable;
    this._condition = condition;
  }
}

export default Supplier;