import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as Joi from 'joi';

export enum StatusEnum {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  DELIVERED = 'DELIVERED',
}

export class CreateOrderDTO {
  customerId: number;
  inventoryId: number;
  storeId: number;
  quantity: number;
}

export class UpdateOrderDTO {
  status: StatusEnum;
}

export class OrderListResponse {
  items: Order[];
  totalCount: number;
}

@Entity()
export class Order implements CreateOrderDTO, UpdateOrderDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  inventoryId: number;

  @Column()
  storeId: number;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  status: StatusEnum;

  @Column({ nullable: true })
  createDate: Date;

  @Column({ nullable: true })
  updateDate: Date;
}

export const CreateOrderRequestSchema = Joi.object({
  customerId: Joi.number().required(),
  inventoryId: Joi.number().required(),
  storeId: Joi.number().required(),
  quantity: Joi.number().required(),
}).options({
  abortEarly: false,
});

export const UpdateOrderRequestSchema = Joi.object({
  status: Joi.string().required(),
}).options({
  abortEarly: false,
});
