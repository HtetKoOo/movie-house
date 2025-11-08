export async function getSearchMovies(query: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEARCH_API_URL}?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}&language=en-US&page=1`
  );

  if (!res.ok) throw new Error("Failed to fetch search results");
  return res.json();
}
