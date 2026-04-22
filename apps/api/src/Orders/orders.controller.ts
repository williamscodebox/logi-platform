import { Controller, Get, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

// orders.controller.ts
@Controller('api')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get('orders')
  async getOrders(@Query('page') page = 1, @Query('pageSize') pageSize = 25) {
    return this.service.getOrders(Number(page), Number(pageSize));
  }
}
