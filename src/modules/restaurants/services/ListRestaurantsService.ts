import AppError from '@shared/errors/AppError';
import Restaurant from '../infra/typeorm/entities/Restaurant';
import RestaurantsRepository from '../infra/typeorm/repositories/RestaurantsRepository';

export default class ListRestaurantsService {
  public async execute(id?: number): Promise<Restaurant | Restaurant[]> {
    const restaurantsRepository = new RestaurantsRepository();

    if (id) {
      const restaurant = await restaurantsRepository.findById(id);

      if (!restaurant) {
        throw new AppError('Invalid id');
      }

      return restaurant;
    }

    const restaurants = await restaurantsRepository.findAll();

    return restaurants;
  }
}
