import { getTopRatedTvShows } from "@/services/get-top-rated-tv";
import { TvShowGrid } from "@/components/tv-show/tv-show-grid";

export default async function TopRatedTvPage() {
  const shows = await getTopRatedTvShows();

  return (
    <TvShowGrid title="Top Rated TV Shows" shows={shows} />
  );
}
