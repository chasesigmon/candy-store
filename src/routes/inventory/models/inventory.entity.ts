import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as Joi from 'joi';

export class InventoryDTO {
  public name: string;
  public manufactureDate: Date;
  public availableQuantity: number;
}

export class InventoryListResponse {
  items: Inventory[];
  totalCount: number;
}

@Entity()
export class Inventory implements InventoryDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufactureDate: Date;

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
