import Product from '../infra/typeorm/entities/Products';
import ProductsRepository from '../infra/typeorm/repositories/ProductsRepository';

export default class ListProductsService {
  async execute(): Promise<Product[]> {
    const productsRepository = new ProductsRepository();

    const products = await productsRepository.findAll();

    return products;
  }
}
