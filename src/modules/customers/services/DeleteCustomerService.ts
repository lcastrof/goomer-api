import Customer from '../infra/typeorm/entities/Customer';
import CustomersRepository from '../infra/typeorm/repositories/CustomersRepository';

export default class DeleteCustomerService {
  public async execute(id: number): Promise<Customer> {
    const customersRepository = new CustomersRepository();

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new Error('Invalid ID');
    }

    await customersRepository.delete(customer);

    return customer;
  }
}
