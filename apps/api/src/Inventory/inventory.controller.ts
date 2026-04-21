import { Controller, Get } from '@nestjs/common';
import { InventoryService } from './inventory.service';

// inventory.controller.ts
@Controller('api/inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Get('inventory')
  async getInventory() {
    return this.service.getInventory();
  }
}
