class FilterObject {
  
  private _filterProperty : String;
  public get filterProperty() : String {
    return this._filterProperty;
  }
  public set filterProperty(v : String) {
    this._filterProperty = v;
  }

  constructor(
    property: String
  ){
    this._filterProperty = property
  }
  
}

export default FilterObject;