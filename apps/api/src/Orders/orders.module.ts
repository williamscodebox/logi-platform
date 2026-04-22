import { Module } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [PrismaModule],
  providers: [OrdersRepository, OrdersService],
  exports: [OrdersRepository],
  controllers: [OrdersController],
})
export class OrdersModule {}
