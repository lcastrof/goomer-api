import Customer from '@modules/customers/infra/typeorm/entities/Customer';

interface IProduct {
  product_id: number;
  price: number;
  quantity: number;
}

export default interface CreateOrderDTO {
  customer: Customer;
  products: IProduct[];
}
