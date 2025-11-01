import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function MovieCard({ movie }: { movie: any }) {
    return (
        <Card className="w-32 md:w-38 p-0 rounded-2xl shrink-0 gap-1">
            <CardContent className="p-0">
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                />
            </CardContent>
            <CardFooter className="p-2">
                <h4 className="text-sm font-semibold truncate">{movie.title || movie.name}</h4>
            </CardFooter>
        </Card>
    );
}
