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
import { CustomerService } from '../services/customer.service';
import { JoiValidationPipe } from '../../../validation/validation.pipe';
import {
  CustomerRequestSchema,
  CustomerDTO,
  Customer,
  CustomerListResponse,
} from '../models/customer.entity';
import {
  CreateCustomerDocs,
  GetCustomerDocs,
  GetCustomersDocs,
  UpdateCustomerDocs,
} from './customer.controller.docs';
import { GenericPageOptionsDto } from '../../../validation/filters';

@Controller('/customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('')
  @CreateCustomerDocs()
  @UsePipes(new JoiValidationPipe(CustomerRequestSchema))
  async create(@Body() body: CustomerDTO): Promise<Customer> {
    return this.customerService.create(body);
  }

  @Get('')
  @GetCustomersDocs()
  async findAll(
    @Query() filter?: GenericPageOptionsDto,
  ): Promise<CustomerListResponse> {
    return this.customerService.findAll(filter);
  }

  @Put('/:id')
  @UpdateCustomerDocs()
  @UsePipes(new JoiValidationPipe(CustomerRequestSchema))
  async update(
    @Param() params: { id: string },
    @Body() body: CustomerDTO,
  ): Promise<Customer> {
    return this.customerService.update(params.id, body);
  }

  @Get('/:id')
  @GetCustomerDocs()
  async find(@Param() params: { id: string }): Promise<Customer> {
    return this.customerService.find(params.id);
  }
}
