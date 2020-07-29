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
}

export default RestaurantsRepository;
