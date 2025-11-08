import { getSearchMovies } from "@/services/get-search-movies";
import Image from "next/image";
import Link from "next/link";

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
    const query = searchParams.query || "";

    if (!query) return <p className="text-center mt-10 text-gray-400">Type something to search for movies.</p>;

    const results = await getSearchMovies(query);

    return (
        <main className="min-h-screen px-6 py-10 text-white">
            <h1 className="text-3xl font-bold mb-6">Search Results for: "{query}"</h1>

            {results.results.length === 0 ? (
                <p>No movies found.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {results.results.map((movie: any) => (
                        <Link key={movie.id} href={`/movie/${movie.id}`}>
                            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
                                <Image
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                            : "/no-image.png"
                                    }
                                    alt={movie.title}
                                    width={300}
                                    height={450}
                                    className="w-full h-72 object-cover"
                                />
                                <div className="p-2 text-center">
                                    <p className="font-semibold text-sm line-clamp-2">{movie.title}</p>
                                    <p className="text-xs text-gray-400">⭐ {movie.vote_average.toFixed(1)}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
