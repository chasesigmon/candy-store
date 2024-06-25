import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { formatFilter, PageOptionsDto } from '../../../validation/filters';
import { Repository } from 'typeorm';
import { Customer, CustomerDTO } from '../models/customer.entity';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(body: CustomerDTO): Promise<Customer> {
    return this.customerRepository.create(body);
  }

  async findAll(
    @Query() filter?: PageOptionsDto,
  ): Promise<[Customer[], number]> {
    const formattedFilter = formatFilter(filter);
    const result = await this.customerRepository.findAndCount(formattedFilter);
    return result;
  }

  async find(id: string): Promise<Customer> {
    return this.customerRepository.findOne(parseInt(id));
  }

  async update(id: string, body: CustomerDTO): Promise<Customer> {
    return this.customerRepository.save({ id: parseInt(id), ...body });
  }
}
