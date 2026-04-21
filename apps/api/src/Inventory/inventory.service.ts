import { Injectable } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';

// orders.service.ts
@Injectable()
export class InventoryService {
  constructor(private readonly inventoryRepo: InventoryRepository) {}

  async getInventory() {
    const allInventory = await this.inventoryRepo.countOpenInventory();

    return {
      allInventory,
    };
  }
}
