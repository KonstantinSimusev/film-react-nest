import { Schedule } from '../film/entities/schedule.entity';

export interface ITicket {
  film: string;
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
  schedule: Schedule;
}

export const postOrderTicket: ITicket = {
  film: '5b70cb1a-61c9-47b1-b207-31f9e89087ff',
  session: '208ec902-8955-4a52-bdc3-a6ff04602ed9',
  daytime: '2024-06-30T15:00:53.000Z',
  row: 3,
  seat: 5,
  price: 350,
  schedule: {
    id: '793009d6-030c-4dd4-8d13-9ba500724b38',
    daytime: '2024-06-28T07:00:53.000Z',
    hall: 0,
    rows: 5,
    seats: 10,
    price: 350,
    taken: ['3:3', '1:4', '1:5', '1:3', '1:2'],
  } as Schedule,
};

export const fixtures = {
  postOrderTicket,
};
