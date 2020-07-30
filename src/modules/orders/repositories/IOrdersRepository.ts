import CreateOrderDTO from '../dtos/CreateOrderDTO';
import Order from '../infra/typeorm/entities/Order';

export default interface IOrdersRepository {
  findById(id: number): Promise<Order | undefined>;
  findByEmail(email: string): Promise<Order | undefined>;
  create(data: CreateOrderDTO): Promise<Order>;
  delete(order: Order): Promise<void>;
}
