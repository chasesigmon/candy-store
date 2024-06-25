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
import { InventoryService } from '../services/inventory.service';
import { JoiValidationPipe } from '../../../validation/validation.pipe';
import {
  InventoryRequestSchema,
  InventoryDTO,
  Inventory,
  InventoryListResponse,
} from '../models/inventory.entity';
import { PageOptionsDto } from '../../../validation/filters';

@Controller('/inventories')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('')
  @UsePipes(new JoiValidationPipe(InventoryRequestSchema))
  async create(@Body() body: InventoryDTO): Promise<Inventory> {
    return this.inventoryService.create(body);
  }

  @Get('')
  async findAll(
    @Query() filter?: PageOptionsDto,
  ): Promise<InventoryListResponse> {
    return this.inventoryService.findAll(filter);
  }

  @Put('/:id')
  @UsePipes(new JoiValidationPipe(InventoryRequestSchema))
  async update(
    @Param() params: { id: string },
    @Body() body: InventoryDTO,
  ): Promise<Inventory> {
    return this.inventoryService.update(params.id, body);
  }

  @Get('/:id')
  async find(@Param() params: { id: string }): Promise<Inventory> {
    return this.inventoryService.find(params.id);
  }
}
