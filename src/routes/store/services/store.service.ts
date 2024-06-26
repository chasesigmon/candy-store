import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { StorePageOptions } from '../../../validation/filters';
import { StoreDTO, StoreListResponse } from '../models/store.entity';
import { StoreRepository } from '../repositories/store.repository';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async create(body: StoreDTO) {
    return this.storeRepository.create(body);
  }

  async findAll(
    @Query() filter?: StorePageOptions,
  ): Promise<StoreListResponse> {
    const result = await this.storeRepository.findAll(filter);
    return {
      items: result[0],
      totalCount: result[1],
    };
  }

  async update(id: string, body: StoreDTO) {
    await this.find(id);
    return this.storeRepository.update(id, body);
  }

  async find(id: string) {
    const result = await this.storeRepository.find(id);

    if (!result) {
      throw new NotFoundException(`Could not find Store item with id: ${id}`);
    }

    return result;
  }
}
