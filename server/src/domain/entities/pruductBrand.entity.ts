class ProductBrand {
    private description: string;

    constructor(
        description: string,
    ) {
        this.description = description;
    }
    //  GETTERS
    public getDescription(): string {
        return this.description;
    }
    //  SETTERS
    public setDescription(value: string): string {
        return (this.description = value);
    }
}

export default ProductBrand;
