export default interface CreateProductsDTO {
  restaurant_id: number;
  name: string;
  price: number;
  category: string;
  promotion?: boolean;
  promotion_description?: string;
  promotion_price?: number;
}
