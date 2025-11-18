"use server"

import { Movie } from "@/types/movie";

export const getTvShowDetails = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TV_DETAILS_API_URL}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log("tv",data)
  return data as Movie;
};
