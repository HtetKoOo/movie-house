import { Movie } from "./movie";

export interface TvShow extends Movie {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}
