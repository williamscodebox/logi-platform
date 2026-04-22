import { Module } from '@nestjs/common';
import { ShipmentsRepository } from './shipments.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { ShipmentsController } from './shipments.controller';
import { ShipmentsService } from './shipments.service';

@Module({
  imports: [PrismaModule],
  providers: [ShipmentsRepository, ShipmentsService],
  exports: [ShipmentsRepository],
  controllers: [ShipmentsController],
})
export class ShipmentsModule {}
