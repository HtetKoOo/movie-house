import MovieSlider from "@/components/movie-slider";
import NowPlayingMovie from "@/components/now-playing-movie";
import PopularMovie from "@/components/popular-movie";
import PopularTVSeries from "@/components/popular-tv-series";
import UpcomingMovie from "@/components/upcoming-movie";
import { getTopRatedMovies } from "@/services/get-top-rated-movies";
import { getPopularMovies } from "@/services/get-popular-movies";
import { getNowPlayingMovies } from "@/services/get-now-playing-movies";
import { getUpcomingMovies } from "@/services/get-upcoming-movies";
import { getPopularTvShows } from "@/services/get-popular-tv";

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const popularTVSeries = await getPopularTvShows();

  return (
    <div className="flex w-full items-center justify-center">
      <main className="flex w-full flex-col items-center justify-between">
        <MovieSlider topRatedMovies={topRatedMovies || []} />
        <PopularMovie popularMovies={popularMovies || []} />
        <PopularTVSeries popularTVSeries={popularTVSeries || []} />
        <NowPlayingMovie nowPlayingMovies={nowPlayingMovies || []} />
        <UpcomingMovie upcomingMovies={upcomingMovies || []} />
      </main>
    </div>
  );
}

