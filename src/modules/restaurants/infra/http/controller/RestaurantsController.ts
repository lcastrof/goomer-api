import { Request, Response } from 'express';
import CreateRestaurantService from '@modules/restaurants/services/CreateRestaurantService';

class RestaurantController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createRestaurant = new CreateRestaurantService();

    const { photo, name, address } = request.body;

    const restaurant = await createRestaurant.execute({ photo, name, address });

    return response.json(restaurant);
  }
}

export default RestaurantController;
