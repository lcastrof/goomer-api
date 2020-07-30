import { Router } from 'express';

import restaurantsRouter from '@modules/restaurants/infra/http/routes/restaurants.routes';
import customersRouter from '@modules/customers/infra/http/routes/customers.routes';

const routes = Router();

routes.use('/restaurants', restaurantsRouter);
routes.use('/customers', customersRouter);

export default routes;
