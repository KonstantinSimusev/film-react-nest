import { Entity, PrimaryColumn, Column, OneToMany, JoinTable } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity()
export class Film {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'float', nullable: false })
  rating: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  director: string;

  @Column({ type: 'jsonb', nullable: false })
  tags: string[];

  @Column({ type: 'varchar', length: 255, nullable: false })
  image: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  cover: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  about: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  @JoinTable()
  schedule: Schedule[];
}
