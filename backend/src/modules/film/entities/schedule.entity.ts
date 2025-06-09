import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Film } from './film.entity';
import { Ticket } from '../../order/entities/ticket.entity';

@Entity()
export class Schedule {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
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
  @JoinColumn({ name: 'film_id' })
  film: Film;

  @OneToMany(() => Ticket, (ticket) => ticket.schedule)
  tickets: Ticket[];
}
