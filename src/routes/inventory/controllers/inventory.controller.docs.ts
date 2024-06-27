import { applyDecorators, BadRequestException } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Inventory } from '../models/inventory.entity';

export const CreateInventoryDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Create inventory',
      description: 'Create a new inventory',
    }),
    ApiCreatedResponse({ type: Inventory }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );

export const UpdateInventoryDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Update inventory',
      description: 'Update an inventory',
    }),
    ApiOkResponse({ type: Inventory }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );

export const GetInventoryDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Get inventory',
      description: 'Get an inventory',
    }),
    ApiOkResponse({ type: Inventory }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );

export const GetInventoriesDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Get inventories',
      description: 'Get a list of inventories',
    }),
    ApiOkResponse({ type: Inventory, isArray: true }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );
