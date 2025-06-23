import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Film } from './film.entity';
import { Ticket } from '../../order/entities/ticket.entity';

@Entity({
  name: 'schedules',
})
export class Schedule {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'varchar', nullable: false })
  daytime: string;

  @Column({ type: 'integer', nullable: false })
  hall: number;

  @Column({ type: 'integer', nullable: false })
  rows: number;

  @Column({ type: 'integer', nullable: false })
  seats: number;

  @Column({ type: 'integer', nullable: false })
  price: number;

  @Column({ type: 'jsonb', nullable: false })
  taken: string[];

  @ManyToOne(() => Film, (film) => film.schedule)
  film?: Film;

  @OneToMany(() => Ticket, (ticket) => ticket.schedule)
  tickets: Ticket[];
}
