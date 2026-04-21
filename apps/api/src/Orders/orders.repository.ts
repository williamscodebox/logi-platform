import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type SummaryResponse = {
  allOrders: number;
};

@Injectable()
export class OrdersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async countOpenOrders(): Promise<SummaryResponse> {
    const count = await this.prisma.customerOrder.count({
      where: {
        status: {
          in: ['CREATED', 'ALLOCATED', 'PICKING'],
        },
      },
    });
    return { allOrders: count };
  }
}
