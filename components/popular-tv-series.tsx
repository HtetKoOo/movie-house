import { TvShow } from "@/types/tv-show"
import MovieCard from "./movie-card"
import Link from "next/link"

export default function PopularTVSeries({ popularTVSeries }: { popularTVSeries: TvShow[] }) {
    return (
        <section className="w-full mt-8">
            <h3 className="text-2xl font-semibold mb-4 mx-2 md:mx-6">Popular TV Series</h3>
            <div
                className="flex mx-2 md:mx-6 space-x-3 overflow-x-auto rounded-2xl scrollbar-rounded"
            >
                {popularTVSeries.map((tvSeries) => (
                    <Link key={tvSeries.id} href={`/tv/${tvSeries.id}`}>
                        <MovieCard key={tvSeries.id} movie={tvSeries} />
                    </Link>
                ))}
            </div>
        </section>
    )
}