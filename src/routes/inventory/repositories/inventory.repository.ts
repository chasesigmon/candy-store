import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { formatFilter, PageOptionsDto } from '../../../validation/filters';
import { Repository } from 'typeorm';
import { Inventory, InventoryDTO } from '../models/inventory.entity';

@Injectable()
export class InventoryRepository {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async create(body: InventoryDTO): Promise<Inventory> {
    return this.inventoryRepository.create(body);
  }

  async findAll(
    @Query() filter?: PageOptionsDto,
  ): Promise<[Inventory[], number]> {
    const formattedFilter = formatFilter(filter);
    const result = await this.inventoryRepository.findAndCount(formattedFilter);
    return result;
  }

  async find(id: string): Promise<Inventory> {
    return this.inventoryRepository.findOne(parseInt(id));
  }

  async update(id: string, body: InventoryDTO): Promise<Inventory> {
    return this.inventoryRepository.save({ id: parseInt(id), ...body });
  }
}
