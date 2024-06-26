import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  checkNameFilter,
  formatFilter,
  GenericPageOptions,
} from '../../../validation/filters';
import { Repository } from 'typeorm';
import { Inventory, InventoryDTO } from '../models/inventory.entity';

@Injectable()
export class InventoryRepository {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async create(body: InventoryDTO): Promise<Inventory> {
    const result = await this.inventoryRepository.save(body);
    return result;
  }

  async findAll(
    @Query() filter?: GenericPageOptions,
  ): Promise<[Inventory[], number]> {
    let formattedFilter = formatFilter(filter);
    formattedFilter = checkNameFilter('name', filter, formattedFilter);
    return await this.inventoryRepository.findAndCount(formattedFilter);
  }

  async find(id: string): Promise<Inventory> {
    return this.inventoryRepository.findOne(parseInt(id));
  }

  async update(id: string, body: InventoryDTO): Promise<Inventory> {
    return this.inventoryRepository.save({ id: parseInt(id), ...body });
  }
}
