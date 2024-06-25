import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from '../src/routes/inventory/models/inventory.entity';

export const TypeOrmSQLITETestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [Inventory],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Inventory]),
];
