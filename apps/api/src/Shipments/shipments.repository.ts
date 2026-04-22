import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShipmentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async countLateShipments(): Promise<number> {
    return await this.prisma.shipment.count({
      where: {
        status: 'IN_TRANSIT',
        stops: {
          some: {
            eta: { lt: new Date() },
          },
        },
      },
    });
  }
}
