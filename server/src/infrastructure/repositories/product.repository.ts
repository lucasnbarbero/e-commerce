import UpdateProductCommand from '../../application/commands/product/update.product.command';
import Product from '../../domain/entities/product.entity';
import ProductSchema from '../models/product.model'

class ProductRepository {
  private Products: Product[];

  //  CONSTRUCTOR
  constructor(){
    this.Products = [];
    console.log(this.Products)
  }


  //  BUSCAR TODOS
  async findAll(): Promise<Product[]> {
    this.Products = await ProductSchema.find();
    return this.Products;
  }


  //  BUSCAR POR ID
  async findOneById(id: string): Promise<Product | null> {
    const Product = ProductSchema.findById(id);
    return Product
  }





  //  CREAR REGISTRO
  async createProduct(Product: Product): Promise<void>{
    const ProductObj = new ProductSchema(Product);
    ProductObj.save();
  }


  //  ELIMINAR REGISTRO
  async deleteById(id: string): Promise<void> {
    const Product = await ProductSchema.findByIdAndDelete(id)
    return Product;
  }

  async updateById(id: string, command: UpdateProductCommand): Promise<Product | null> {
    const Product = await ProductSchema.findByIdAndUpdate(id, command);
    return Product;
  }

}

export default new ProductRepository;
