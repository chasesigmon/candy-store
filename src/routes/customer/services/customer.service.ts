import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { PageOptionsDto } from '../../../validation/filters';
import { CustomerDTO, CustomerListResponse } from '../models/customer.entity';
import { CustomerRepository } from '../repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create(body: CustomerDTO) {
    return this.customerRepository.create(body);
  }

  async findAll(
    @Query() filter?: PageOptionsDto,
  ): Promise<CustomerListResponse> {
    const result = await this.customerRepository.findAll(filter);
    return {
      items: result[0],
      totalCount: result[1],
    };
  }

  async update(id: string, body: CustomerDTO) {
    await this.find(id);
    return this.customerRepository.update(id, body);
  }

  async find(id: string) {
    const result = await this.customerRepository.find(id);

    if (!result) {
      throw new NotFoundException(
        `Could not find Customer item with id: ${id}`,
      );
    }

    return result;
  }
}
