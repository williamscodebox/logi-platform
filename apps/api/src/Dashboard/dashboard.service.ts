import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../Orders/orders.repository';
// import { ShipmentsRepository } from './shipments.repository';
// import { InventoryRepository } from './inventory.repository';

// dashboard.service.ts
@Injectable()
export class DashboardService {
  constructor(private readonly ordersRepo: OrdersRepository) {}
  //   private readonly shipmentsRepo: ShipmentsRepository,
  //   private readonly inventoryRepo: InventoryRepository,

  async getSummary() {
    const { allOrders } = await this.ordersRepo.countOpenOrders();
    // const lateShipments = await this.shipmentsRepo.countLateShipments();
    // const lowInventory = await this.inventoryRepo.countLowStock();

    return {
      allOrders,
      // lateShipments,
      // lowInventory,
    };
  }
}
