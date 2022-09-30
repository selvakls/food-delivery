import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { SchedulesModule } from './schedules/schedules.module';
import * as dotenv from 'dotenv';
import { Schedule } from './entities/schedule.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.dbhost,
      port: Number(process.env.dbport),
      username: process.env.dbusername,
      password: process.env.dbpassword,
      database: process.env.database,
      entities: [Schedule],
      logging: true,
      synchronize: true,
    }),
    SchedulesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
