import Order from '../infra/typeorm/entities/Order';
import OrdersRepository from '../infra/typeorm/repositories/OrdersRepository';

interface Request {
  name: string;
  email: string;
}

export default class CreateOrdersService {
  public async execute({ name, email }: Request): Promise<Order> {
    const ordersRepository = new OrdersRepository();

    const emailExists = await ordersRepository.findByEmail(email);

    if (emailExists) {
      throw new Error('email already in use');
    }

    const order = await ordersRepository.create({ name, email });

    return order;
  }
}
