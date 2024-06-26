import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as Joi from 'joi';

export class StoreDTO {
  public address: string;
  public managerName: string;
}

export class StoreListResponse {
  items: Store[];
  totalCount: number;
}

@Entity()
export class Store implements StoreDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  managerName: string;
}

export const StoreRequestSchema = Joi.object({
  address: Joi.string().required(),
  managerName: Joi.string().required(),
}).options({
  abortEarly: false,
});
