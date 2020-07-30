export default interface CreateRestaurantDTO {
  photo?: string;
  name: string;
  address: {
    public_place: string;
    number: number;
    district: string;
    city: string;
    state: string;
    complement?: string;
  };
}
