import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

// orders.controller.ts
@Controller('api')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get('orders')
  async getOrders() {
    return this.service.getOrders();
  }
}
