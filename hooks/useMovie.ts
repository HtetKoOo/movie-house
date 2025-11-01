import { useQuery, useQueryClient } from "@tanstack/react-query";
export const useTopRatedMovie = () => {
    const {
      data: topRatedMovies,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ["topRatedMovies"],
      queryFn: async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TOP_RATED_API_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        return data.results;
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return { topRatedMovies, isLoading, isError };
}

export const usePopularMovie = () => {
    const {
    data: popularMovies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_POPULAR_API_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      return data.results;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { popularMovies, isLoading, isError };
}

export const useNowPlayingMovie = () => {
    const {
        data: nowPlayingMovies,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["nowPlayingMovies"],
        queryFn: async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_NOW_PLAYING_API_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            return data.results;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return { nowPlayingMovies, isLoading, isError };
}

export const useUpcomingMovie = () => {
    const {
        data: upcomingMovies,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["upcomingMovies"],
        queryFn: async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_UPCOMING_API_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            return data.results;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return { upcomingMovies, isLoading, isError };
}

export const usePopularTVSeries = () => {
    const {
        data: popularTVSeries,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["popularTVSeries"],
        queryFn: async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_POPULAR_TV_SERIES_API_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            return data.results;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return { popularTVSeries, isLoading, isError };
}