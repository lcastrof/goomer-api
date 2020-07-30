import { Router } from 'express';
import OrdersController from '../controller/OrdersController';

const ordersController = new OrdersController();

const customersRouter = Router();

customersRouter.post('/', ordersController.create);
customersRouter.delete('/:id', ordersController.delete);

export default customersRouter;
