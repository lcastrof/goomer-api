import { Request, Response } from 'express';
import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import DeleteCustomerService from '@modules/customers/services/DeleteCustomerService';

export default class CustomersControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCustomerService = new CreateCustomerService();

    const { name, email } = request.body;

    const customer = await createCustomerService.execute({ name, email });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteCustomersService = new DeleteCustomerService();

    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const customer = await deleteCustomersService.execute(parsedId);

    return response.json(customer);
  }
}
