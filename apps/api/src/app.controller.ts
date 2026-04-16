import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('health')
  async checkDb() {
    const count = await this.prisma.customerOrder.count();
    return { ok: true, count };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
