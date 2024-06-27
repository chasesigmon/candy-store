import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as Joi from 'joi';
import { ApiProperty } from '@nestjs/swagger';

export class InventoryDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  manufactureDate: Date;

  @ApiProperty()
  availableQuantity: number;
}

export class InventoryListResponse {
  @ApiProperty()
  items: Inventory[];

  @ApiProperty()
  totalCount: number;
}

@Entity()
export class Inventory implements InventoryDTO {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  manufactureDate: Date;

  @ApiProperty()
  @Column()
  availableQuantity: number;
}

export const InventoryRequestSchema = Joi.object({
  name: Joi.string().required(),
  manufactureDate: Joi.date().required(),
  availableQuantity: Joi.number().required(),
}).options({
  abortEarly: false,
});
