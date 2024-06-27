import { applyDecorators, BadRequestException } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Order } from '../../order/models/order.entity';

export const GetReportDocs = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Get orders report',
      description: 'Get a monthly report of orders',
    }),
    ApiOkResponse({ type: Order }),
    ApiBadRequestResponse({
      description: new BadRequestException().message,
    }),
  );
