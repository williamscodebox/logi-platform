import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type SummaryResponse = {
  allInventory: number;
};

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async countOpenInventory(): Promise<SummaryResponse> {
    const count = await this.prisma.customerOrder.count({
      where: {
        status: {
          in: ['CREATED', 'ALLOCATED', 'PICKING'],
        },
      },
    });
    return { allInventory: count };
  }

  async countLowStock(): Promise<number> {
    return await this.prisma.inventoryBalance.count({
      where: { onHand: { lt: 5 } },
    });
  }
}
