// export async function getSearchMovies(query: string) {
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SEARCH_API_URL}?api_key=${apiKey}&query=${encodeURIComponent(
//       query
//     )}&language=en-US&page=1`
//   );

//   if (!res.ok) throw new Error("Failed to fetch search results");
//   return res.json();
// }

export async function getSearchMovies(query: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_MOVIE_SEARCH_API_URL;

  if (!apiKey || !baseUrl) {
    throw new Error(
      "Missing environment variables: NEXT_PUBLIC_API_KEY or NEXT_PUBLIC_SEARCH_API_URL",
    );
  }

  const url = `${baseUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`;

  const res = await fetch(url, {
    next: { revalidate: 60 }, // optional caching for 1 minute
  });

  if (!res.ok) {
    console.error("Search API error:", res.status, res.statusText);
    throw new Error("Failed to fetch search results");
  }

  return res.json();
}
