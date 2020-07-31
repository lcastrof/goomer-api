import Product from '../infra/typeorm/entities/Products';
import ProductsRepository from '../infra/typeorm/repositories/ProductsRepository';

export default class DeleteProductsService {
  public async execute(id: number): Promise<Product> {
    const productsRepository = new ProductsRepository();

    const product = await productsRepository.findById(id);

    if (!product) {
      throw new Error('Invalid ID');
    }

    await productsRepository.delete(product);

    return product;
  }
}
