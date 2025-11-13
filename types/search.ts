export interface Movie {
  id: number;
  title: string;
  name?: string; // for TV shows
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  popularity: number;
  media_type?: string;
  genres?: { id: number; name: string }[];
  production_companies?: { id: number; name: string }[];
  original_language?: string;
  runtime?: number;
}

export interface SearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
