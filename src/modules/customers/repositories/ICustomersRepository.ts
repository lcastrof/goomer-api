import CreateCustomerDTO from '../dtos/CreateCustomerDTO';
import Customer from '../infra/typeorm/entities/Customer';

export default interface ICustomersRepository {
  findById(id: number): Promise<Customer | undefined>;
  findByEmail(email: string): Promise<Customer | undefined>;
  create(data: CreateCustomerDTO): Promise<Customer>;
  delete(customer: Customer): Promise<void>;
}
