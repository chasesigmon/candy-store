import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { OrderService } from '../services/order.service';
import { JoiValidationPipe } from '../../../validation/validation.pipe';
import {
  CreateOrderRequestSchema,
  UpdateOrderRequestSchema,
  CreateOrderDTO,
  UpdateOrderDTO,
  Order,
  OrderListResponse,
} from '../models/order.entity';
import { OrderPageOptionsDto } from '../../../validation/filters';

@Controller('/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('')
  @UsePipes(new JoiValidationPipe(CreateOrderRequestSchema))
  async create(@Body() body: CreateOrderDTO): Promise<Order> {
    return this.orderService.create(body);
  }

  @Get('')
  async findAll(
    @Query() filter?: OrderPageOptionsDto,
  ): Promise<OrderListResponse> {
    return this.orderService.findAll(filter);
  }

  @Put('/:id')
  @UsePipes(new JoiValidationPipe(UpdateOrderRequestSchema))
  async update(
    @Param() params: { id: string },
    @Body() body: UpdateOrderDTO,
  ): Promise<Order> {
    return this.orderService.update(params.id, body);
  }

  @Get('/:id')
  async find(@Param() params: { id: string }): Promise<Order> {
    return this.orderService.find(params.id);
  }
}
