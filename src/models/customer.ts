export class Customer {
  id: number;
  name: string;
  phone?: string;
  responsible?: Customer;
}
