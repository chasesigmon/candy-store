import { Controller, Get, Query } from '@nestjs/common';
import { OrderService } from '../../order/services/order.service';
import { GetReportDocs } from './report.controller.docs';

@Controller('/report')
export class ReportController {
  constructor(private readonly orderService: OrderService) {}

  @Get('')
  @GetReportDocs()
  async report(): Promise<any> {
    return this.orderService.report();
  }
}
