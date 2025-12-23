import { Flame } from "lucide-react";
import MovieCard from "./movie-card";
import Link from "next/link";
import { Movie } from "@/types/movie";


export default function PopularMovie({ popularMovies }: { popularMovies: Movie[] }) {

    return (
        <section className="w-full mt-8">
            <h3 className="text-2xl font-semibold mb-4 mx-2 md:mx-6">
                Popular Movies
                <Flame className="inline-block ml-1 text-red-500" />
            </h3>

            <div className="flex mx-2 md:mx-6 space-x-3 overflow-x-auto rounded-2xl scrollbar-rounded">
                {popularMovies.map((movie: Movie) => (
                    <Link key={movie.id} href={`/movie/${movie.id}`}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </div>
        </section>
    );
}