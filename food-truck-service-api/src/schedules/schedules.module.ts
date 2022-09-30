import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from 'src/entities/schedule.entity';
import { DateTransformer } from 'src/pipes/common-pipes';
import {
  ScheduleDoToDtoTransformer,
  ScheduleDtoToDOTransformer,
} from './pipes/schedule.transform.pipe';
import { SchedulesController } from './schedules.controller';
import { ScheduleService } from './schedules.service';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  controllers: [SchedulesController],
  providers: [
    ScheduleService,
    ScheduleDtoToDOTransformer,
    ScheduleDoToDtoTransformer,
    DateTransformer,
  ],
})
export class SchedulesModule {}
