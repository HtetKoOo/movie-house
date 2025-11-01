import MovieCard from "./movie-card";

export default function UpcomingMovie({ upcomingMovies }: { upcomingMovies: any[] }) {
    return (
        <section className="w-full mt-8">
            <h3 className="text-2xl font-semibold mb-4 mx-8">Upcoming Movies</h3>
            <div
                className="flex mx-8 space-x-3 overflow-x-auto rounded-2xl scrollbar-hide"
            >
                {upcomingMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    )
}