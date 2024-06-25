import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../src/routes/customer/models/customer.entity';
import { Inventory } from '../src/routes/inventory/models/inventory.entity';

export const TypeOrmSQLITETestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [Inventory, Customer],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Inventory, Customer]),
];
