"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { CirclePlay } from "lucide-react";

export default function MovieSlider({ topRatedMovies }: { topRatedMovies: any[] }) {
    const hasEnoughSlides = topRatedMovies.length > 1; // loop needs at least 2

    return (
        <div className="relative w-full h-[40vh] md:h-[55vh] lg:h-[70vh] overflow-hidden rounded-b-2xl">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={hasEnoughSlides}
            style={{ width: "100%", height: "100%" }}
        >
            {topRatedMovies.map((movie, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-b-2xl"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-5 md:bottom-10 lg:bottom-20 left-5 lg:left-10 p-4 text-white w-2/3 md:w-1/2">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{movie.title}</h3>
                        <p className="hidden lg:block w-full">{movie.overview}</p>
                        <Button className="mt-2 cursor-pointer"><CirclePlay />Watch Now</Button>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <h4 className="absolute bottom-5 right-10 z-20 text-xl md:text-2xl font-bold text-white">
                Top Rated Movies
            </h4>
        </div>
    );
}
