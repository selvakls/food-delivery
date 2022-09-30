import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ScheduleDto, ScheduleSchema } from 'src/dtos/schedule.dto';
import { DateTransformer } from 'src/pipes/common-pipes';

@Injectable()
export class ScheduleValidationPipe implements PipeTransform<ScheduleDto> {
  
  
  public transform(schedule: ScheduleDto): ScheduleDto {
    
    const validation = ScheduleSchema.validate(schedule);
    if (validation.error) {
      throw new BadRequestException('Not a valid Schedule Object');
    }
    return schedule;
  }
}
