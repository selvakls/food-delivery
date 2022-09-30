import { InjectRepository } from '@nestjs/typeorm';
import { ScheduleDto } from 'src/dtos/schedule.dto';
import { Schedule } from 'src/entities/schedule.entity';
import { Repository } from 'typeorm';
import {
  ScheduleDoToDtoTransformer,
  ScheduleDtoToDOTransformer,
} from './pipes/schedule.transform.pipe';

export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private schedulesRepository: Repository<Schedule>,
    private scheduleDtoToDOTransformer: ScheduleDtoToDOTransformer,
    private scheduleDoToDtoTransformer: ScheduleDoToDtoTransformer,
  ) {}

  async addSchedule(scheduleDto: ScheduleDto) {
    const schedule = await this.scheduleDtoToDOTransformer.transform(
      scheduleDto,
    );

    return this.schedulesRepository.save(schedule);
  }

  async getSchedules(date: Date) {
    const where = {
      scheduleDate: date,
    };
    const schedules = await this.schedulesRepository.findBy(where);
    console.log(schedules);
    const scheduleDtos = [];
    schedules.forEach((schedule) => {
      scheduleDtos.push(this.scheduleDoToDtoTransformer.transform(schedule));
    });
    return scheduleDtos;
  }
}
