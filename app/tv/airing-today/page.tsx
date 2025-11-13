import { TvShowGrid } from "@/components/tv-show/tv-show-grid";
import { getAiringTodayTvShows } from "@/services/get-airing-today-tv";

export default async function AiringTodayPage() {
    const shows = await getAiringTodayTvShows();

    return (
        <TvShowGrid title="Airing Today TV Shows" shows={shows} />
    );
}
