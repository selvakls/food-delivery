import { PipeTransform } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import moment from 'moment';

@Injectable()
export class DateTransformer implements PipeTransform<string, Date> {
  transform(dateString: string): Date {
    const date = moment(dateString, 'MM-DD-YYYY').toDate();
    return date;
  }
}
