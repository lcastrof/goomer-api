import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant';
import RestaurantsRepository from '../infra/typeorm/repositories/RestaurantsRepository';

interface Request {
  photo?: string;
  name: string;
  address: {
    public_place: string;
    number: number;
    district: string;
    city: string;
    state: string;
    complement?: string;
  };
}

export default class CreateRestaurantService {
  public async execute({ photo, name, address }: Request): Promise<Restaurant> {
    const restaurantsRepository = new RestaurantsRepository();

    const restaurantExists = await restaurantsRepository.findByName(name);

    if (restaurantExists) {
      throw new Error('Restaurant already exists');
    }

    const restaurant = await restaurantsRepository.create({
      photo,
      name,
      address,
    });

    return restaurant;
  }
}
