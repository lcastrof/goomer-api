import AppError from '@shared/errors/AppError';
import Restaurant from '../infra/typeorm/entities/Restaurant';
import RestaurantsRepository from '../infra/typeorm/repositories/RestaurantsRepository';

interface Request {
  id: number;
  photo?: string;
  name: string;
  address: {
    public_place: string;
    number: number;
    district: string;
    city: string;
    state: string;
    complement: string;
  };
}

export default class UpdateRestaurantService {
  public async execute({
    id,
    photo,
    name,
    address,
  }: Request): Promise<Restaurant> {
    const restaurantRepository = new RestaurantsRepository();

    const restaurant = await restaurantRepository.findById(id);

    if (!restaurant) {
      throw new AppError('Invalid ID');
    }

    if (photo) {
      restaurant.photo = photo;
    }

    restaurant.name = name;
    restaurant.address = address;

    return restaurantRepository.save(restaurant);
  }
}
