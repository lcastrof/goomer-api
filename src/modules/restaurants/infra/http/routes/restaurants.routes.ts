import { Router } from 'express';

import RestaurantsController from '../controller/RestaurantsController';

const restaurantsController = new RestaurantsController();

const restaurantsRouter = Router();

restaurantsRouter.post('/', restaurantsController.create);

export default restaurantsRouter;
