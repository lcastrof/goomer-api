import { Router } from 'express';

import RestaurantsController from '../controller/RestaurantsController';

const restaurantsController = new RestaurantsController();

const restaurantsRouter = Router();

restaurantsRouter.get('/', restaurantsController.index);
restaurantsRouter.get('/:id', restaurantsController.index);
restaurantsRouter.post('/', restaurantsController.create);
restaurantsRouter.put('/:id', restaurantsController.update);
restaurantsRouter.delete('/:id', restaurantsController.delete);

export default restaurantsRouter;
