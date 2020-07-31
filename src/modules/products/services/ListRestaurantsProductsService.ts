import Product from '../infra/typeorm/entities/Products';
import ProductsRepository from '../infra/typeorm/repositories/ProductsRepository';

export default class ListRestaurantsProductsService {
  async execute(id: number): Promise<Product[]> {
    const productsRepository = new ProductsRepository();

    const products = await productsRepository.findAll();

    const restaurantsProducts = products.filter(
      product => product.restaurant_id === id,
    );

    return restaurantsProducts;
  }
}
