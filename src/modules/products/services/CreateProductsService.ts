import AppError from '@shared/errors/AppError';
import Product from '../infra/typeorm/entities/Products';
import ProductsRepository from '../infra/typeorm/repositories/ProductsRepository';

interface Request {
  restaurant_id: number;
  name: string;
  price: number;
  category: string;
  promotion?: boolean;
  promotion_description?: string;
  promotion_price?: number;
}

export default class CreateProductsService {
  public async execute({
    restaurant_id,
    name,
    price,
    category,
    promotion,
    promotion_description,
    promotion_price,
  }: Request): Promise<Product> {
    const productsRepository = new ProductsRepository();

    const productAlreadyExists = await productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError('Product already registered');
    }

    const product = await productsRepository.create({
      restaurant_id,
      name,
      price,
      category,
      promotion,
      promotion_description,
      promotion_price,
    });

    return product;
  }
}
