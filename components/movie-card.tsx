import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Movie } from "@/types/movie";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <Card className="w-32 md:w-38 p-0 rounded-2xl shrink-0 gap-1">
            <CardContent className="p-0">
                <div className="relative w-full h-48">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title || movie.name || "Movie Poster"}
                        fill
                        sizes="(max-width: 768px) 128px, (max-width: 1024px) 152px, 160px"
                        className="object-cover rounded-t-2xl"
                        priority={false}
                        placeholder="blur"
                        blurDataURL="/placeholder.png" // optional placeholder
                    />
                </div>
            </CardContent>
            <CardFooter className="p-2">
                <h4 className="text-sm font-semibold truncate">{movie.title || movie.name}</h4>
            </CardFooter>
        </Card>
    );
}
