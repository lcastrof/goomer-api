import { Router } from 'express';
import CustomersController from '../controller/CustomersController';

const customersController = new CustomersController();

const customersRouter = Router();

customersRouter.post('/', customersController.create);
customersRouter.delete('/:id', customersController.delete);

export default customersRouter;
