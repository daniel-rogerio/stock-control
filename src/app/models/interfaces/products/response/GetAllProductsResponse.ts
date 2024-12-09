export interface GetAllProductsResponse {
  id: string;
  name: string;
  amount: number;
  description: string;
  price: string;
  categoty: {
    id: string;
    name: string;
  }
}