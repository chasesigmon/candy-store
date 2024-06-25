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
import { CustomerService } from '../services/customer.service';
import { JoiValidationPipe } from '../../../validation/validation.pipe';
import {
  CustomerRequestSchema,
  CustomerDTO,
  Customer,
  CustomerListResponse,
} from '../models/customer.entity';
import { PageOptionsDto } from '../../../validation/filters';

@Controller('/customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('')
  @UsePipes(new JoiValidationPipe(CustomerRequestSchema))
  async create(@Body() body: CustomerDTO): Promise<Customer> {
    return this.customerService.create(body);
  }

  @Get('')
  async findAll(
    @Query() filter?: PageOptionsDto,
  ): Promise<CustomerListResponse> {
    return this.customerService.findAll(filter);
  }

  @Put('/:id')
  @UsePipes(new JoiValidationPipe(CustomerRequestSchema))
  async update(
    @Param() params: { id: string },
    @Body() body: CustomerDTO,
  ): Promise<Customer> {
    return this.customerService.update(params.id, body);
  }

  @Get('/:id')
  async find(@Param() params: { id: string }): Promise<Customer> {
    return this.customerService.find(params.id);
  }
}
