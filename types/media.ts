export interface MediaBase {
  id: number;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  popularity: number;
  homepage: string;
  origin_country: string[];
  original_language?: string;
  genres?: { id: number; name: string }[];
  production_companies?: { id: number; name: string }[];
}
