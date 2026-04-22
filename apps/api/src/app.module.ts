import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { DashboardModule } from './Dashboard/dashboard.module';
import { InventoryModule } from './Inventory/inventory.module';
import { OrdersModule } from './Orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DashboardModule,
    InventoryModule,
    OrdersModule,
    // ShipmentsModule,
    // WarehouseModule,
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
