import { Router } from 'express';
import ProductsController from '../controller/ProductsController';

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.post('/', productsController.create);

export default productsRouter;
