import { TvShowGrid } from "@/components/tv-show/tv-show-grid";
import { getPopularTvShows } from "@/services/get-popular-tv";

export default async function PopularTvPage() {
  const shows = await getPopularTvShows();

  return (
    <TvShowGrid title="Popular TV Shows" shows={shows} />
  );
}
