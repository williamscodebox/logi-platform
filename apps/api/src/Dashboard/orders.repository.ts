import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async countOpenOrders(): Promise<number> {
    return await this.prisma.customerOrder.count({
      where: {
        status: {
          in: ['CREATED', 'ALLOCATED', 'PICKING'],
        },
      },
    });
  }
}
