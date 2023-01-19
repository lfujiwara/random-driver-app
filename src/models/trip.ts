import { Customer } from './customer';

export class Trip {
  id: number;
  customers: Customer[];
  origin: string;
  destination: string;
  distance: number; // meters
  fare: number; // cents
}
