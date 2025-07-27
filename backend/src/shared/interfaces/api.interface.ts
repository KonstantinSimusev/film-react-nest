export interface ApiListResponse<T> {
  total: number;
  items: T[];
}

export interface IFilm {
  id: string;
  rating: number;
  director: string;
  tags: string[];
  image: string;
  cover: string;
  title: string;
  about: string;
  description: string;
  schedule: ISсhedule[];
}

export interface ISсhedule {
  id: string;
  daytime: string;
  hall: number;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

export interface ITicket {
  film: string;
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
}
