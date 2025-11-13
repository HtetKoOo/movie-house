import { TvShowGrid } from "@/components/tv-show/tv-show-grid";
import { getOnAirTvShows } from "@/services/get-on-air-tv";

export default async function OnAirTvPage() {
  const shows = await getOnAirTvShows();

  return (
    <TvShowGrid title="On Air TV Shows" shows={shows} />
  );
}
