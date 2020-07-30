import { getRepository, Repository } from 'typeorm';
import CreateProductsDTO from '@modules/products/dtos/CreateProductsDTO';
import IProductsRepository from '../../../repositories/IProductsRepository';
import Product from '../entities/Products';

export default class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  // public async findById(id: number): Promise<Customer | undefined> {
  //   const customer = this.ormRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });

  //   return customer;
  // }

  // public async findByEmail(email: string): Promise<Customer | undefined> {
  //   const customer = this.ormRepository.findOne({
  //     where: {
  //       email,
  //     },
  //   });

  //   return customer;
  // }

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

  // public async delete(customer: Customer): Promise<void> {
  //   await this.ormRepository.delete(customer);
  // }
}
