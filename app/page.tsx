"use client";
import MovieSlider from "@/components/movie-slider";
import NowPlayingMovie from "@/components/now-playing-movie";
import PopularMovie from "@/components/popular-movie";
import PopularTVSeries from "@/components/popular-tv-series";
import UpcomingMovie from "@/components/upcoming-movie";
import { useNowPlayingMovie, usePopularMovie, usePopularTVSeries, useTopRatedMovie, useUpcomingMovie } from "@/hooks/useMovie";

export default function Home() {
  const { topRatedMovies, isLoading, isError } = useTopRatedMovie();
  const { popularMovies, isLoading: popularLoading, isError: popularError } = usePopularMovie();
  const { nowPlayingMovies, isLoading: nowPlayingLoading, isError: nowPlayingError } = useNowPlayingMovie();
  const { upcomingMovies, isLoading: upcomingLoading, isError: upcomingError } = useUpcomingMovie();
  const { popularTVSeries, isLoading: popularTVLoading, isError: popularTVError } = usePopularTVSeries();

  console.log({popularTVSeries});

  if (isLoading || popularLoading || nowPlayingLoading || upcomingLoading || popularTVLoading) return <div>Loading...</div>;
  if (isError || popularError || nowPlayingError || upcomingError || popularTVError) return <div>Error loading movies</div>;

  return (
    <div className="flex w-full items-center justify-center">
      <main className="flex w-full m-0 p-0 flex-col items-center justify-between">
        <MovieSlider topRatedMovies={topRatedMovies || []} />
        <PopularMovie popularMovies={popularMovies || []} />
        <PopularTVSeries popularTVSeries={popularTVSeries || []} />
        <NowPlayingMovie nowPlayingMovies={nowPlayingMovies || []} />
        <UpcomingMovie upcomingMovies={upcomingMovies || []} />
      </main>
    </div>
  );
}
