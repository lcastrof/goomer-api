import { Router } from 'express';

import { uuid } from 'uuidv4';

const restaurantsRouter = Router();

const restaurants = [];

restaurantsRouter.post('/', (request, response) => {
  const { restaurantImage, name, address, openingHours } = request.body;

  const restaurant = {
    id: uuid(),
    restaurantImage,
    name,
    address,
    openingHours,
  };

  restaurants.push(restaurant);

  return response.json(restaurant);
});

export default restaurantsRouter;
