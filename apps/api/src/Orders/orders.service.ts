import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};
export type OrderStatus =
  | 'DRAFT'
  | 'CONFIRMED'
  | 'PICKING'
  | 'SHIPPED'
  | 'INVOICED'
  | 'CANCELLED';

export type Order = {
  id: number;
  customer: string | null;
  orderNumber: string;
  createdAt: string;
  promisedDate: string | null;
  status: OrderStatus;
};

// orders.service.ts
@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepo: OrdersRepository) {}

  async getOrders(page: number, pageSize: number): Promise<Paginated<Order>> {
    return this.ordersRepo.listOrders(page, pageSize);
  }
}
