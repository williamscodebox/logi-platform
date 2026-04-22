import { Controller, Get } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';

// shipments.controller.ts
@Controller('api')
export class ShipmentsController {
  constructor(private readonly service: ShipmentsService) {}

  @Get('shipments')
  async getShipments() {
    return this.service.getShipments();
  }
}
