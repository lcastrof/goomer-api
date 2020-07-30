import { Request, Response } from 'express';
import CreateProductsService from '@modules/products/services/CreateProductsService';

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
}
