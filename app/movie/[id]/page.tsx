import { Badge } from "@/components/ui/badge";
import { getMovieDetails } from "@/services/get-movies";
import { Star } from "lucide-react";

interface Genre {
    id: number;
    name: string;
}

interface Movie {
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genres: Genre[];
    poster_path: string | null;
    origin_country?: string[]; // optional
    production_companies: { id: number; name: string }[];
    original_language: string;
}

export default async function MovieDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;




    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_MOVIE_DETAILS_API_URL}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    // );

    // if (!res.ok) {
    //     throw new Error("Movie not found");
    // }

    // const movie: Movie = await res.json();

    const movie = await getMovieDetails(id);
    console.log(movie);

    return (
        <main className="min-h-screen pt-18 sm:pt-20 px-2 sm:px-6">
            {/* TITLE */}
            <div className="flex flex-col sm:flex-row justify-between">
                {/* LEFT */}
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full sm:w-40 lg:w-70 h-[70vh] sm:h-full mb-4 sm:mb-0 object-cover rounded-2xl"
                />
                {/* CENTER */}
                <div className="flex flex-col flex-1 sm:mx-6">
                    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                    <div className="flex items-center mb-4 gap-2">
                        {movie.genres.map((genre) => (
                            <Badge key={genre.id}>{genre.name}</Badge>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <p className="flex items-center mb-2"><Star className="mr-1" /> <strong>{movie.vote_average}/</strong>10</p>
                        <span>|</span>
                        <p className="">{movie.origin_country}</p>
                        <span>|</span>
                        <p>{movie.original_language}</p>
                    </div>
                    <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
                    <p className="mb-4 sm:hidden lg:block"><strong>Overview -</strong> {movie.overview}</p>
                </div>
                {/* RIGHT */}
                <div className="flex flex-col w-full sm:w-1/4 md:w-1/6 lg:w-1/8">
                    <h2 className="text-2xl font-bold mb-4">Production Companies</h2>
                    <div className="flex flex-wrap gap-2">
                        {movie.production_companies.map((company) => (
                            <Badge key={company.id}>{company.name}</Badge>
                        ))}
                    </div>
                </div>
            </div>
            <p className="mb-4 hidden sm:block lg:hidden"><strong>Overview -</strong> {movie.overview}</p>
        </main>
    );
}
