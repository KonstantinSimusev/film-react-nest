import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Film } from './film.entity';

@Entity({
  name: 'schedules',
})
export class Schedule {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ nullable: false })
  daytime: string;

  @Column({ type: 'integer', nullable: false })
  hall: number;

  @Column({ type: 'integer', nullable: false })
  rows: number;

  @Column({ type: 'integer', nullable: false })
  seats: number;

  @Column({ type: 'integer', nullable: false })
  price: number;

  @Column('simple-array', { nullable: false })
  taken: string[];

  @ManyToOne(() => Film, (film) => film.schedule)
  film: Film;
}

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class Schedule {
//   @Prop({ required: true })
//   id: string;

//   @Prop({ required: true })
//   daytime: string;

//   @Prop({ required: true })
//   hall: number;

//   @Prop({ required: true })
//   rows: number;

//   @Prop({ required: true })
//   seats: number;

//   @Prop({ required: true })
//   price: number;

//   @Prop({ required: true })
//   taken: string[];
// }

// export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
