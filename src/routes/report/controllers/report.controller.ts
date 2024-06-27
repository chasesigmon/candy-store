import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../auth/jwt.guard';
import { OrderService } from '../../order/services/order.service';
import { GetReportDocs } from './report.controller.docs';

@Controller('/report')
@UseGuards(JwtGuard)
export class ReportController {
  constructor(private readonly orderService: OrderService) {}

  @Get('')
  @GetReportDocs()
  async report(): Promise<any> {
    return this.orderService.report();
  }
}
