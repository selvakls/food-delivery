import { Controller, Get, Body, Post, Query } from '@nestjs/common';
import { ScheduleDto } from 'src/dtos/schedule.dto';
import { DateTransformer } from 'src/pipes/common-pipes';
import { ScheduleValidationPipe } from './pipes/schedule.validation.pipe';
import { ScheduleService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  async addSchedule(
    @Body(new ScheduleValidationPipe()) scheduleDto: ScheduleDto,
  ) {
    return this.scheduleService.addSchedule(scheduleDto);
  }

  @Get()
  async getSchedules(@Query('date', new DateTransformer()) date: Date) {
    return this.scheduleService.getSchedules(date);
  }
}
