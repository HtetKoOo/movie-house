import MovieCard from "./movie-card"
export default function PopularTVSeries({ popularTVSeries }: { popularTVSeries: any[] }) {
    return (
        <section className="w-full mt-8">
            <h3 className="text-2xl font-semibold mb-4 mx-8">Popular TV Series</h3>
            <div
                className="flex mx-8 space-x-3 overflow-x-auto rounded-2xl scrollbar-hide"
            >
                {popularTVSeries.map((tvSeries) => (
                    <MovieCard key={tvSeries.id} movie={tvSeries} />
                ))}
            </div>
        </section>
    )
}