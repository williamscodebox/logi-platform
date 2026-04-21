import { Module } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrdersRepository],
  exports: [OrdersRepository],
})
export class OrdersModule {}
