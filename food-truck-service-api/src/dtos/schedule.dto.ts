import { AuditDto } from './audit.dto';
import Joi from 'joi';

export class ScheduleDto extends AuditDto {
  scheduleDate: string;
  truckName: string;
}

export const ScheduleSchema = Joi.object({
  scheduleDate: Joi.string().required(),
  truckName: Joi.string().required(),
}).options({
  abortEarly: false,
});
