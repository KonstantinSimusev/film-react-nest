import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Schedule } from '../../film/entities/schedule.entity';

@Entity()
export class Ticket {
  @PrimaryColumn({
    type: 'uuid',
    nullable: false,
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  film: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  session: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  daytime: string;

  @Column({ type: 'integer', nullable: false })
  row: number;

  @Column({ type: 'integer', nullable: false })
  seat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @ManyToOne(() => Schedule, (schedule) => schedule.tickets)
  @JoinColumn({ name: 'session_id' })
  schedule: Schedule;
}
