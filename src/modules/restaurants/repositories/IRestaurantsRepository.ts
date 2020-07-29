import CreateRestaurantDTO from '@modules/restaurants/dtos/CreateRestaurantDTO';
import Restaurant from '../infra/typeorm/entities/Restaurant';

export default interface IRestaurantsRepository {
  create(data: CreateRestaurantDTO): Promise<Restaurant>;
  findByName(name: string): Promise<Restaurant | undefined>;
}
