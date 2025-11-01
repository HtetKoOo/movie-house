import { Flame } from "lucide-react";
import MovieCard from "./movie-card";

export default function PopularMovie({ popularMovies }: { popularMovies: any[] }) {
    return (
        <section className="w-full mt-8"> 
            <h3 className="text-2xl font-semibold mb-4 mx-8">Popular Movies<Flame className="inline-block ml-1 text-red-500" /></h3>
            <div
                className="flex mx-8 space-x-3 overflow-x-auto rounded-2xl scrollbar-hide"
            >
                {popularMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    )
}