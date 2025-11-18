import { MediaBase } from "./media";

export interface TvShow extends MediaBase {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  last_air_date?: string;
  media_type?: "tv";
}
