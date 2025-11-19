import { getSearchMovies } from "@/services/get-search-movies";
import { SearchResultGrid } from "@/components/search/search-result-grid";
import { Movie } from "@/types/movie";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const { query } = await searchParams;

    const trimmedQuery = query?.trim() || "";

    if (!trimmedQuery) {
        return (
            <p>Type something to search for movies 🎬</p>
        );
    }

    const results = (await getSearchMovies(trimmedQuery));

    return (
        <SearchResultGrid title={`Search Results for "${query}"`} results={results.results as Movie[]} />

    );
}
