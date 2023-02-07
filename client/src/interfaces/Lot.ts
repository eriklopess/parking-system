import { Car } from './Car';

export interface Lot {
  id: number;
  number: number;
  isOccupied: boolean;
  car?: Car;
}
