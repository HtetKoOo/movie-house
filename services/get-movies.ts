"use server"

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  poster_path: string | null;
  origin_country?: string[]; // optional
  production_companies: { id: number; name: string }[];
  original_language: string;
}

export const getMovieDetails = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_DETAILS_API_URL}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data as Movie;
};
