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
import { StoreService } from '../services/store.service';
import { JoiValidationPipe } from '../../../validation/validation.pipe';
import {
  StoreRequestSchema,
  StoreDTO,
  Store,
  StoreListResponse,
} from '../models/store.entity';
import { PageOptionsDto } from '../../../validation/filters';

@Controller('/stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('')
  @UsePipes(new JoiValidationPipe(StoreRequestSchema))
  async create(@Body() body: StoreDTO): Promise<Store> {
    return this.storeService.create(body);
  }

  @Get('')
  async findAll(@Query() filter?: PageOptionsDto): Promise<StoreListResponse> {
    return this.storeService.findAll(filter);
  }

  @Put('/:id')
  @UsePipes(new JoiValidationPipe(StoreRequestSchema))
  async update(
    @Param() params: { id: string },
    @Body() body: StoreDTO,
  ): Promise<Store> {
    return this.storeService.update(params.id, body);
  }

  @Get('/:id')
  async find(@Param() params: { id: string }): Promise<Store> {
    return this.storeService.find(params.id);
  }
}
