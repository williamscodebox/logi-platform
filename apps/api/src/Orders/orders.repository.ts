import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};
export type OrderStatus =
  | 'DRAFT'
  | 'CONFIRMED'
  | 'PICKING'
  | 'SHIPPED'
  | 'INVOICED'
  | 'CANCELLED';

export type Order = {
  id: number;
  customer: string | null;
  orderNumber: string;
  createdAt: string;
  promisedDate: string | null;
  status: OrderStatus;
};

@Injectable()
export class OrdersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listOrders(page: number, pageSize: number): Promise<Paginated<Order>> {
    const [rows, total] = await Promise.all([
      this.prisma.customerOrder.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.customerOrder.count(),
    ]);

    const items: Order[] = rows.map((o) => ({
      id: o.id,
      orderNumber: o.orderNumber,
      customer: o.customer,
      status: o.status as OrderStatus,
      createdAt: o.createdAt.toISOString(),
      promisedDate: o.promisedDate ? o.promisedDate.toISOString() : null,
    }));

    return {
      items,
      total,
      page,
      pageSize,
    };
  }
}
