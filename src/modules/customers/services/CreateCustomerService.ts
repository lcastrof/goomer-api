import Customer from '../infra/typeorm/entities/Customer';
import CustomersRepository from '../infra/typeorm/repositories/CustomersRepository';

interface Request {
  name: string;
  email: string;
}

export default class CreateCustomersService {
  public async execute({ name, email }: Request): Promise<Customer> {
    const customersRepository = new CustomersRepository();

    const emailExists = await customersRepository.findByEmail(email);

    if (emailExists) {
      throw new Error('email already in use');
    }

    const customer = await customersRepository.create({ name, email });

    return customer;
  }
}
