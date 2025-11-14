import { Flame } from "lucide-react";
import MovieCard from "./movie-card";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function NowPlayingMovie({ nowPlayingMovies }: { nowPlayingMovies: Movie[] }) {
    return (
        <section className="w-full mt-8">
            <h3 className="text-2xl font-semibold mb-4 mx-2 md:mx-6">Now Playing Movies<Flame className="inline-block ml-1 text-red-500" /></h3>
            <div
                className="flex mx-2 md:mx-6 space-x-3 overflow-x-auto rounded-2xl scrollbar-hide"
            >
                {nowPlayingMovies.map((movie) => (
                    <Link key={movie.id} href={`/movie/${movie.id}`}>
                        <MovieCard key={movie.id} movie={movie} />
                    </Link>
                ))}
            </div>
        </section>
    )
}