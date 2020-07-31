import CreateProductsDTO from '../dtos/CreateProductsDTO';
import Product from '../infra/typeorm/entities/Products';

export default interface IProductsRepository {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product | undefined>;
  findByName(name: string): Promise<Product | undefined>;
  create(data: CreateProductsDTO): Promise<Product>;
  delete(product: Product): Promise<void>;
}
