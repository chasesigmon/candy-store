import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsEnum, Min, IsInt, Max } from 'class-validator';

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class PageOptionsDto {
  @ApiPropertyOptional()
  @IsOptional()
  orderBy?: string;

  @ApiPropertyOptional({ enum: SortOrder, default: SortOrder.ASC })
  @IsEnum(SortOrder)
  @IsOptional()
  sortOrder?: SortOrder = SortOrder.ASC;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  pageSize?: number = 10;
}

export class GenericPageOptions extends PageOptionsDto {
  @ApiPropertyOptional({
    description: 'Can filter by "name". ex: `?filter={ "name": "John" }`',
  })
  @IsOptional()
  filter?: string;
}

export class StorePageOptions extends PageOptionsDto {
  @ApiPropertyOptional({
    description:
      'Can filter by "managerName". ex: `?filter={ "managerName": "John" }`',
  })
  @IsOptional()
  filter?: string;
}

export class OrderPageOptions extends PageOptionsDto {}

export const formatFilter = (filter?: PageOptionsDto) => {
  let formattedFilter: any = {};
  const page = filter?.page || 1;
  const pageSize = filter?.pageSize || 10;

  formattedFilter.skip = (page - 1) * (pageSize + 1);
  formattedFilter.take = pageSize;

  if (filter?.orderBy) {
    formattedFilter.order = {
      [filter.orderBy]: filter?.sortOrder || SortOrder.ASC,
    };
  } else {
    formattedFilter.order = { ['id']: SortOrder.ASC };
  }

  return formattedFilter;
};

export const checkNameFilter = (
  field: string,
  filter?: GenericPageOptions,
  formattedFilter?: any,
) => {
  if (filter?.filter) {
    try {
      const parsed = JSON.parse(filter.filter);
      parsed.name && (formattedFilter.where = { [field]: parsed.name });
    } catch (err) {
      // catch and disregard error if invalid JSON was passed in
    }
  }
  return formattedFilter;
};
