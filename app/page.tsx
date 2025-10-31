"use client";
import MovieSlider from "@/components/movie-slider";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRelatedMovies();
  }, []);

  const getRelatedMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ffb8e8a9d20e66f65c5d3ab0a30bf08d&language=en-US");
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  }


  return (
    <div className="flex w-full items-center justify-center">
      <main className="flex w-full flex-col items-center justify-between">
        <MovieSlider movies={movies} />
      </main>
    </div>
  );
}
