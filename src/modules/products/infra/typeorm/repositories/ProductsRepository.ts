import { getRepository, Repository } from 'typeorm';
import CreateProductsDTO from '@modules/products/dtos/CreateProductsDTO';
import IProductsRepository from '../../../repositories/IProductsRepository';
import Product from '../entities/Products';

export default class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.ormRepository.find();

    return products;
  }

  public async findById(id: number): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  public async create({
    restaurant_id,
    name,
    category,
    price,
    promotion,
    promotion_description,
    promotion_price,
  }: CreateProductsDTO): Promise<Product> {
    const product = this.ormRepository.create({
      restaurant_id,
      name,
      category,
      price,
      promotion,
      promotion_description,
      promotion_price,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async delete(product: Product): Promise<void> {
    await this.ormRepository.delete(product);
  }
}
