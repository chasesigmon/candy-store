import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: '0.0.0.0',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'cnd_str_db',
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        seeds: ['./seed.ts'],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
