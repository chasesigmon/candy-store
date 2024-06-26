import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { GenericPageOptions } from '../../../validation/filters';
import {
  InventoryDTO,
  InventoryListResponse,
} from '../models/inventory.entity';
import { InventoryRepository } from '../repositories/inventory.repository';

@Injectable()
export class InventoryService {
  constructor(private readonly inventoryRepository: InventoryRepository) {}

  async create(body: InventoryDTO) {
    return this.inventoryRepository.create(body);
  }

  async findAll(
    @Query() filter?: GenericPageOptions,
  ): Promise<InventoryListResponse> {
    const result = await this.inventoryRepository.findAll(filter);
    return {
      items: result[0],
      totalCount: result[1],
    };
  }

  async update(id: string, body: InventoryDTO) {
    await this.find(id);
    return this.inventoryRepository.update(id, body);
  }

  async find(id: string) {
    const result = await this.inventoryRepository.find(id);

    if (!result) {
      throw new NotFoundException(
        `Could not find Inventory item with id: ${id}`,
      );
    }

    return result;
  }
}
