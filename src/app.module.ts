import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { InventoryModule } from './routes/inventory/inventory.module';
import { InventoryController } from './routes/inventory/controllers/inventory.controller';
import { InventoryService } from './routes/inventory/services/inventory.service';
import { HealthCheckModule } from './routes/healthcheck/healthcheck.module';
import { HealthCheckController } from './routes/healthcheck/healthcheck.controller';
import { CustomerController } from './routes/customer/controllers/customer.controller';
import { CustomerModule } from './routes/customer/customer.module';
import { CustomerService } from './routes/customer/services/customer.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    HealthCheckModule,
    InventoryModule,
    CustomerModule,
  ],
  controllers: [HealthCheckController, InventoryController, CustomerController],
  providers: [InventoryService, CustomerService],
})
export class AppModule {}
