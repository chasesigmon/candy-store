import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  checkNameFilter,
  formatFilter,
  PageOptionsDto,
} from '../../../validation/filters';
import { Repository } from 'typeorm';
import { Customer, CustomerDTO } from '../models/customer.entity';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(body: CustomerDTO): Promise<Customer> {
    return this.customerRepository.save(body);
  }

  async findAll(
    @Query() filter?: PageOptionsDto,
  ): Promise<[Customer[], number]> {
    let formattedFilter = formatFilter(filter);
    formattedFilter = checkNameFilter('name', filter, formattedFilter);
    return await this.customerRepository.findAndCount(formattedFilter);
  }

  async find(id: string): Promise<Customer> {
    return this.customerRepository.findOne(parseInt(id));
  }

  async update(id: string, body: CustomerDTO): Promise<Customer> {
    return this.customerRepository.save({ id: parseInt(id), ...body });
  }
}
