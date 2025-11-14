interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  name?: string; // for TV shows
  overview: string;
  poster_path: string | null;
  origin_country?: string[]; // optional
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  popularity: number;
  media_type?: string;
  genres?: Genre[];
  production_companies?: { id: number; name: string }[];
  original_language?: string;
  runtime?: number;
}
