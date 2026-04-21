// dashboard.module.ts
import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { OrdersModule } from '../Orders/orders.module';

@Module({
  imports: [
    OrdersModule,
    // ShipmentsModule,
    // InventoryModule,
  ],

  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
