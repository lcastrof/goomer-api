import CreateOrderDTO from '@modules/orders/dtos/CreateOrderDTO';
import { getRepository, Repository } from 'typeorm';
import IOrdersRepository from '../../../repositories/IOrdersRepository';
import Order from '../entities/Order';

export default class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findById(id: number): Promise<Order | undefined> {
    const order = this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return order;
  }

  public async findByEmail(email: string): Promise<Order | undefined> {
    const order = this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return order;
  }

  public async create({ name, email }: CreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({ name, email });

    await this.ormRepository.save(order);

    return order;
  }

  public async delete(order: Order): Promise<void> {
    await this.ormRepository.delete(order);
  }
}
