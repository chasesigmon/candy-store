import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as Joi from 'joi';

export class CustomerDTO {
  name: string;
}

export class CustomerListResponse {
  items: Customer[];
  totalCount: number;
}

@Entity()
export class Customer implements CustomerDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export const CustomerRequestSchema = Joi.object({
  name: Joi.string().required(),
}).options({
  abortEarly: false,
});
