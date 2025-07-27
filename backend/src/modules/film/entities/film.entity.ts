import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity({
  name: 'films',
})
export class Film {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'float', nullable: false })
  rating: number;

  @Column({ nullable: false })
  director: string;

  @Column('simple-array', { nullable: false })
  tags: string[];

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  cover: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  about: string;

  @Column({ nullable: false })
  description: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  schedule: Schedule[];
}

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Schedule, ScheduleSchema } from './schedule.entity';

// @Schema()
// export class Film {
//   @Prop({ required: true })
//   id: string;

//   @Prop({ required: true })
//   rating: number;

//   @Prop({ required: true })
//   director: string;

//   @Prop({ required: true })
//   tags: string[];

//   @Prop({ required: true })
//   image: string;

//   @Prop({ required: true })
//   cover: string;

//   @Prop({ required: true })
//   title: string;

//   @Prop({ required: true })
//   about: string;

//   @Prop({ required: true })
//   description: string;

//   @Prop({ type: [ScheduleSchema], required: true })
//   schedule: Schedule[];
// }

// export const FilmSchema = SchemaFactory.createForClass(Film);
