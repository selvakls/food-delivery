import { PipeTransform } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ScheduleDto } from 'src/dtos/schedule.dto';
import { Schedule } from 'src/entities/schedule.entity';
import { DateTransformer } from 'src/pipes/common-pipes';
import moment from 'moment';

@Injectable()
export class ScheduleDtoToDOTransformer
  implements PipeTransform<ScheduleDto, Schedule>
{
    private dateTransformer: DateTransformer;
    constructor() {
        this.dateTransformer = new DateTransformer();
    }

  transform(dto: ScheduleDto): Schedule {
    
    const schedule = new Schedule();
    schedule.scheduleDate = this.dateTransformer.transform(
        dto.scheduleDate
      );
    schedule.truckName = dto.truckName;
    return schedule;
  }
}

@Injectable()
export class ScheduleDoToDtoTransformer
  implements PipeTransform<Schedule, ScheduleDto>
{
  transform(schedule: Schedule): ScheduleDto {
    const scheduleDto = new ScheduleDto();
    scheduleDto.scheduleDate = moment(schedule.scheduleDate).format('MM/DD/YYYY');
    scheduleDto.id = schedule.id;
    scheduleDto.createdAt = schedule.createdAt;
    scheduleDto.updatedAt = schedule.updatedAt;
    scheduleDto.truckName = schedule.truckName;

    return scheduleDto;
  }
}
