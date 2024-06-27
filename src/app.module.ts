import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { InventoryModule } from './routes/inventory/inventory.module';
import { HealthCheckModule } from './routes/healthcheck/healthcheck.module';
import { CustomerModule } from './routes/customer/customer.module';
import { StoreModule } from './routes/store/store.module';
import { OrderModule } from './routes/order/order.module';
import { ReportModule } from './routes/report/report.module';
import { SeederModule } from './database/seeder.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    HealthCheckModule,
    InventoryModule,
    CustomerModule,
    StoreModule,
    OrderModule,
    ReportModule,
    SeederModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
