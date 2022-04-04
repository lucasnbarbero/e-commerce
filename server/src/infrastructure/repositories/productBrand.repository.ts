// import UpdateProductBrandCommand from '../../application/commands/productBrand/update.productBrand.command';
import ProductBrand from '../../domain/entities/pruductBrand.entity';
import ProductBrandSchema from '../models/pruductBrand.model'

class ProductBrandRepository {
    private productBrand: ProductBrand[];

    //  CONSTRUCTOR
    constructor(){
        this.productBrand = [];
        console.log(this.productBrand)
    }


    //  BUSCAR TODOS
    async findAll(): Promise<ProductBrand[]> {
        this.productBrand = await ProductBrandSchema.find();
        return this.productBrand;
    }


    //  BUSCAR POR ID
    async findOneById(id: string): Promise<ProductBrand | null> {
        const productBrand = ProductBrandSchema.findById(id);
        return productBrand
    }


    //  CREAR REGISTRO
    async createProductBrand(productBrand: ProductBrand): Promise<void>{
        const productBrandObj = new ProductBrandSchema(productBrand);
        productBrandObj.save();
    }


    //  ELIMINAR REGISTRO
    // async deleteById(id: string): Promise<void> {
    //     const user = await UserSchema.findByIdAndDelete(id)
    //     return user;
    // }

    // async updateByid(id: string, command: UpdateUserCommand): Promise<User | null> {
    //     const user = await UserSchema.findByIdAndUpdate(id, command);
    //     return user;
    // }

}

export default new ProductBrandRepository;
