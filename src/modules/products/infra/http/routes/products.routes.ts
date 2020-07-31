import { Router } from 'express';
import ProductsController from '../controller/ProductsController';

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', productsController.list);
productsRouter.post('/', productsController.create);
productsRouter.delete('/:id', productsController.delete);

export default productsRouter;
