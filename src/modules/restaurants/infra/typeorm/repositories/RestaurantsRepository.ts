import IRestaurantsRepository from '@modules/restaurants/repositories/IRestaurantsRepository';
import { Repository, getRepository } from 'typeorm';
import CreateRestaurantDTO from '@modules/restaurants/dtos/CreateRestaurantDTO';
import Restaurant from '../entities/Restaurant';

class RestaurantsRepository implements IRestaurantsRepository {
  private ormRepository: Repository<Restaurant>;

  constructor() {
    this.ormRepository = getRepository(Restaurant);
  }

  public async create({
    photo,
    name,
    address,
  }: CreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.ormRepository.create({ photo, name, address });

    await this.ormRepository.save(restaurant);

    return restaurant;
  }

  public async findByName(name: string): Promise<Restaurant | undefined> {
    const restaurant = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return restaurant;
  }

  public async findById(id: number): Promise<Restaurant | undefined> {
    const restaurant = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return restaurant;
  }

  public async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.ormRepository.find();

    return restaurants;
  }

  public async save(restaurant: Restaurant): Promise<Restaurant> {
    return this.ormRepository.save(restaurant);
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default RestaurantsRepository;
