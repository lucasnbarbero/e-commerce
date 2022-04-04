class UpdateProductCommand {
    private id: string;
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
    // private productBrand: ProductBrand;
    // private productCategory: ProductCategory;
    // private productSubCategory: ProductSubCategory;
    // private typeTaxes: TypeTaxes;
    // private supplier: Supplier;
    constructor(
        id: string, description: string, price: number, costMediumPrice: number, marginPercentage: number,
        salesPriceWithoutTaxes: number, quantity: number, amount: number, minimalExistence: number,
        code: string, salesPriceWithTaxes: number
    ) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.costMediumPrice = costMediumPrice;
        this.marginPercentage = marginPercentage;
        this.salesPriceWithoutTaxes = salesPriceWithoutTaxes;
        this.quantity = quantity;
        this.amount = amount;
        this.minimalExistence = minimalExistence;
        this.salesPriceWithTaxes = salesPriceWithTaxes;
        this.code = code;
    }

    //  GETTERS
    public getId(): string {
        return this.id;
    }
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

}

export default UpdateProductCommand;
