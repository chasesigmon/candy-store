import { applyDecorators, BadRequestException } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Customer } from '../models/customer.entity';

export const CreateCustomerDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Create customer',
      description: 'Create a new customer',
    }),
    ApiCreatedResponse({ type: Customer }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );

export const UpdateCustomerDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Update customer',
      description: 'Update a customer',
    }),
    ApiOkResponse({ type: Customer }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );

export const GetCustomerDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Get customer',
      description: 'Get a customer',
    }),
    ApiOkResponse({ type: Customer }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );

export const GetCustomersDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Get customers',
      description: 'Get a list of customer',
    }),
    ApiOkResponse({ type: Customer, isArray: true }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );
