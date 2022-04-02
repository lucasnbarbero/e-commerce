class CreateProductCommand {
    private description: string;
    private price: number;
    private costMediumPrice: number;
    private marginPercentage: number;
    private salesPriceWithoutTaxes: number;
    private quantity: number;
    private amount: number;
    private minimalExistence: number;
    private salesPriceWithTaxes: number;
    private code: string;
    // private productBrandId: string? or Id;
    // private productCategoryId: string?;
    // private productSubCategoryId: string?;
    // private typeTaxes: string?;
    // private supplier: string?;
    constructor(
        description: string, price: number, costMediumPrice: number, marginPercentage: number,
        salesPriceWithoutTaxes: number, quantity: number, amount: number, minimalExistence: number,
        code: string, salesPriceWithTaxes: number
    ) {
      this.description = description;
      this.price = price;
      this.costMediumPrice = costMediumPrice;
      this.marginPercentage = marginPercentage;
      this.salesPriceWithoutTaxes = salesPriceWithoutTaxes;
      this.quantity = quantity;
      this.amount = amount;
      this.minimalExistence = minimalExistence;
      this.code = code;
      this.salesPriceWithTaxes = salesPriceWithTaxes;

    }

    //  GETTERS
    public getDescription(): string {
      return this.description;
    }
    public getPrice(): number {
      return this.price;
    }
    public getCostmediumPrice(): number {
      return this.costMediumPrice;
    }
    public getMarginPercentage(): number {
      return this.marginPercentage;
    }

    public getSalesPriceWithoutTaxes(): number {
      return this.salesPriceWithoutTaxes;
    }
    public getQuantity(): number {
      return this.quantity;
    }
    public getAmount(): number {
      return this.amount;
    }
    public getMinimalExistence(): number {
      return this.minimalExistence;
    }
    public getSalesPriceWithTaxes(): number {
      return this.salesPriceWithTaxes;
    }
    public getCode(): string {
      return this.code;
    }
    //  SETTERS
    public setDescription(value: string): string {
      return (this.description = value);
    }
    public setPrice(value: number): number {
      return (this.price = value);
    }
    public setCostmediumPrice(value: number): number {
      return (this.price = value);
    }
    public setMarginPercentage(value: number): number {
      return (this.marginPercentage = value);
    }
    public setSalesPriceWithoutTaxes(value: number): number {
      return (this.salesPriceWithTaxes = value);
    }
    public setQuantity(value: number): number {
      return (this.salesPriceWithTaxes = value);
    }
    public setAmount(value: number): number {
      return (this.amount = value);
    }
    public setMinimalExistence(value: number): number {
      return (this.minimalExistence = value);
    }
    public setSalesPriceWithTaxes(value: number): number {
      return (this.salesPriceWithTaxes = value);
    }
    public setCode(value: string): string {
      return (this.code = value);
    }
  }

  export default CreateProductCommand;
