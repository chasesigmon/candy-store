import { Controller, Get, Query } from '@nestjs/common';
import { PageOptionsDto } from '../../../validation/filters';
import { OrderService } from '../../order/services/order.service';

@Controller('/report')
export class ReportController {
  constructor(private readonly orderService: OrderService) {}

  @Get('')
  async report(): Promise<any> {
    return this.orderService.report();
  }
}
