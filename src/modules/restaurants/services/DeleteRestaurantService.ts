import AppError from '@shared/errors/AppError';
import Restaurant from '../infra/typeorm/entities/Restaurant';
import RestaurantsRepository from '../infra/typeorm/repositories/RestaurantsRepository';

export default class UpdateRestaurantService {
  public async execute(id: number): Promise<Restaurant> {
    const restaurantRepository = new RestaurantsRepository();

    const restaurant = await restaurantRepository.findById(id);

    if (!restaurant) {
      throw new AppError('Invalid ID');
    }

    await restaurantRepository.delete(parseInt(restaurant.id, 10));

    return restaurant;
  }
}
