import ProductBrand from "../../../../domain/entities/pruductBrand.entity";
import ProductBrandRepository from "../../../../infrastructure/repositories/productBrand.repository";

class QueryGetAllProductBrands {
    async getAll(): Promise<ProductBrand[]> {
        const productBrand = await ProductBrandRepository.findAll();
        console.log(productBrand)
        return productBrand;
    }
}

export default new QueryGetAllProductBrands;
