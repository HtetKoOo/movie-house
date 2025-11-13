import { SearchResponse } from "@/types/search";

export async function getSearchMovies(query: string): Promise<SearchResponse> {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_MOVIE_SEARCH_API_URL;

  const url = `${baseUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Search API error:", res.status, res.statusText);
    throw new Error("Failed to fetch search results");
  }

  const data: SearchResponse = await res.json();
  return data;
}
