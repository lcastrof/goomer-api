import CreateProductsDTO from '../dtos/CreateProductsDTO';
import Product from '../infra/typeorm/entities/Products';

export default interface IProductsRepository {
  create(data: CreateProductsDTO): Promise<Product>;
}
