import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

// dashboard.controller.ts
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly service: DashboardService) {}

  @Get('summary')
  async getSummary() {
    return this.service.getSummary();
  }
}
