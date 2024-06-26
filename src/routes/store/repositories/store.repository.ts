import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  checkNameFilter,
  formatFilter,
  StorePageOptions,
} from '../../../validation/filters';
import { Repository } from 'typeorm';
import { Store, StoreDTO } from '../models/store.entity';

@Injectable()
export class StoreRepository {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(body: StoreDTO): Promise<Store> {
    return this.storeRepository.save(body);
  }

  async findAll(
    @Query() filter?: StorePageOptions,
  ): Promise<[Store[], number]> {
    let formattedFilter = formatFilter(filter);
    formattedFilter = checkNameFilter('managerName', filter, formattedFilter);
    return await this.storeRepository.findAndCount(formattedFilter);
  }

  async find(id: string): Promise<Store> {
    return this.storeRepository.findOne(parseInt(id));
  }

  async update(id: string, body: StoreDTO): Promise<Store> {
    return this.storeRepository.save({ id: parseInt(id), ...body });
  }
}
