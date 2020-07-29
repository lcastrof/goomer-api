import { Request, Response } from 'express';
import CreateRestaurantService from '@modules/restaurants/services/CreateRestaurantService';
import ListRestaurantsService from '@modules/restaurants/services/ListRestaurantsService';
import UpdateRestaurantService from '@modules/restaurants/services/UpdateRestaurantService';
import DeleteRestaurantService from '@modules/restaurants/services/DeleteRestaurantService';

class RestaurantController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createRestaurant = new CreateRestaurantService();

    const { photo, name, address } = request.body;

    const restaurant = await createRestaurant.execute({ photo, name, address });

    return response.json(restaurant);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listRestaurants = new ListRestaurantsService();

    const { id } = request.params;

    if (id) {
      const restaurant = await listRestaurants.execute(parseInt(id, 10));

      return response.json(restaurant);
    }

    const restaurants = await listRestaurants.execute();

    return response.json(restaurants);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateRestaurant = new UpdateRestaurantService();

    const { id } = request.params;
    const { photo, name, address } = request.body;

    const restaurant = await updateRestaurant.execute({
      id: parseInt(id, 10),
      photo,
      name,
      address,
    });

    return response.json(restaurant);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteRestaurant = new DeleteRestaurantService();

    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const restaurant = await deleteRestaurant.execute(parsedId);

    return response.json(restaurant);
  }
}

export default RestaurantController;
