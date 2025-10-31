"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MovieSlider({ movies }: { movies: any[] }) {
    const hasEnoughSlides = movies.length > 1; // loop needs at least 2

    return (
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
            {movies.map((movie, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
