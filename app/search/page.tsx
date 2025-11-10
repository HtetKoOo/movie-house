import { getSearchMovies } from "@/services/get-search-movies";
import { Movie } from "@/services/get-movies";
import Image from "next/image";
import Link from "next/link";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    // ✅ Await searchParams before accessing
    const { query } = await searchParams;

    const trimmedQuery = query?.trim() || "";

    if (!trimmedQuery) {
        return (
            <main className="min-h-screen flex items-center justify-center text-gray-400">
                <p>Type something to search for movies 🎬</p>
            </main>
        );
    }

    const results = await getSearchMovies(trimmedQuery);

    return (
        <main className="min-h-screen px-6 py-20 text-white">
            <h1 className="text-3xl font-bold mb-8">
                Search Results for: <span className="text-blue-400">{trimmedQuery}</span>
            </h1>

            {results.results.length === 0 ? (
                <p className="text-gray-400">No movies found for “{trimmedQuery}”.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {results.results.map((movie: Movie) => (
                        <Link
                            key={movie.id}
                            href={`/movie/${movie.id}`}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-101 transition-transform duration-200"
                        >
                            <div className="relative w-full aspect-2/3">
                                <Image
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                            : "/no-image.png"
                                    }
                                    alt={movie.title}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-2 text-center">
                                <p className="font-semibold text-sm line-clamp-2">
                                    {movie.title}
                                </p>
                                <p className="text-xs text-gray-400">
                                    ⭐ {movie.vote_average.toFixed(1)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
