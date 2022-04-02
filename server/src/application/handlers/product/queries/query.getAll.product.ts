import Product from "../../../../domain/entities/product.entity";
import ProductRepository from "../../../../infrastructure/repositories/product.repository";

class QueryGetAllProduct {
  async getAll(): Promise<Product[]> {
    const Products = await ProductRepository.findAll();
    console.log(Products)
    return Products;
  }
}

export default new QueryGetAllProduct;
