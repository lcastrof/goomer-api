import { Request, Response } from 'express';
import CreateProductsService from '@modules/products/services/CreateProductsService';
import DeleteProductsService from '@modules/products/services/DeleteProductsService';
import ListRestaurantsProductsService from '@modules/products/services/ListRestaurantsProductsService';
import ListProductsService from '@modules/products/services/ListProductsService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createProductsService = new CreateProductsService();

    const {
      restaurant_id,
      name,
      price,
      category,
      promotion,
      promotion_description,
      promotion_price,
    } = request.body;

    const product = await createProductsService.execute({
      restaurant_id,
      name,
      price,
      category,
      promotion,
      promotion_description,
      promotion_price,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteProductsService = new DeleteProductsService();

    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const product = await deleteProductsService.execute(parsedId);

    return response.json(product);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listRestaurantsProductsService = new ListRestaurantsProductsService();

    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const products = await listRestaurantsProductsService.execute(parsedId);

    return response.json(products);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute();

    return response.json(products);
  }
}
