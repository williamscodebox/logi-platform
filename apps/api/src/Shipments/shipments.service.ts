import { Injectable } from '@nestjs/common';
import { ShipmentsRepository } from './shipments.repository';

// orders.service.ts
@Injectable()
export class ShipmentsService {
  constructor(private readonly shipmentsRepo: ShipmentsRepository) {}

  async getShipments() {
    const allShipments = await this.shipmentsRepo.countLateShipments();

    return {
      allShipments,
    };
  }
}
