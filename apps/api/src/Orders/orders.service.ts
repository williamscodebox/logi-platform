import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';

// orders.service.ts
@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepo: OrdersRepository) {}

  async getOrders() {
    const allOrders = await this.ordersRepo.countOpenOrders();

    return {
      allOrders,
    };
  }
}
