"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/movie";

interface SearchResultGridProps {
    title: string;
    results: Movie[];
    className?: string;
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

export function SearchResultGrid({ title, results, className }: SearchResultGridProps) {
    return (
        <section className={cn("py-20 px-6 grid gap-6", className)}>
            <h2 className="text-2xl font-semibold">{title}</h2>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
                {results.map((result) => (
                    <div
                        key={result.id}
                        className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform"
                    >
                        <div className="relative w-full aspect-2/3">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                alt={result.name || "Movie poster"}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-3">
                            <h3 className="font-semibold text-sm truncate">{result.name || result.title}</h3>
                            <p className="text-xs text-muted-foreground">
                                ⭐ {result.vote_average.toFixed(1)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
