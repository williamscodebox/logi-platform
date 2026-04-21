import { Module } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [InventoryRepository],
  exports: [InventoryRepository],
})
export class InventoryModule {}
