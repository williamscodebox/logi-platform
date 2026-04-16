import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async countLowStock(): Promise<number> {
    return await this.prisma.inventoryBalance.count({
      where: { onHand: { lt: 5 } },
    });
  }
}
