import CreateCustomerDTO from '@modules/customers/dtos/CreateCustomerDTO';
import { getRepository, Repository } from 'typeorm';
import ICustomersRepository from '../../../repositories/ICustomersRepository';
import Customer from '../entities/Customer';

export default class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findById(id: number): Promise<Customer | undefined> {
    const customer = this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return customer;
  }

  public async create({ name, email }: CreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create({ name, email });

    await this.ormRepository.save(customer);

    return customer;
  }

  public async delete(customer: Customer): Promise<void> {
    await this.ormRepository.delete(customer);
  }
}
