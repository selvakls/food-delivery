import { Column, Entity, Index } from 'typeorm';
import { Audit } from './audit';

@Entity('schedule')
export class Schedule extends Audit {
  @Index()
  @Column({ name: 'truck_name', nullable: false })
  truckName: string;

  @Index()
  @Column({ name: 'schedule_date', nullable: false })
  scheduleDate: Date;
}
