import Image from "next/image";
import { notFound } from "next/navigation";

interface PersonDetail {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
}

async function getPerson(id: string): Promise<PersonDetail> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_PEOPLE_DETAILS_API_URL}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    if (!res.ok) return notFound();
    return res.json();
}

export default async function PersonPage({
    params,
}: {
    params: { id: string }
}) {
    const person = await getPerson(params.id);

    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row gap-10">
                {/* Profile Image */}
                <div className="">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                        alt={person.name}
                        width={350}
                        height={500}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{person.name}</h1>
                    <p className="text-gray-400">{person.known_for_department}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                        <p><span className="font-semibold">Gender:</span> {person.gender === 2 ? "Male" : "Female"}</p>
                        <p><span className="font-semibold">Born:</span> {person.birthday}</p>
                        {person.place_of_birth && (
                            <p><span className="font-semibold">Place of Birth:</span> {person.place_of_birth}</p>
                        )}
                        {person.popularity && (
                            <p><span className="font-semibold">Popularity:</span> {person.popularity.toFixed(1)}</p>
                        )}
                    </div>

                    {/* Also Known As */}
                    {person.also_known_as?.length > 0 && (
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Also Known As</h3>
                            <ul className="flex flex-wrap gap-2">
                                {person.also_known_as.map((aka, index) => (
                                    <li
                                        key={index}
                                        className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {aka}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Biography */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Biography</h3>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {person.biography || "No biography available."}
                        </p>
                    </div>

                    {/* External Links */}
                    <div className="mt-6 flex gap-4">
                        {person.imdb_id && (
                            <a
                                href={`https://www.imdb.com/name/${person.imdb_id}`}
                                target="_blank"
                                className="text-sm underline"
                            >
                                IMDb Profile
                            </a>
                        )}
                        {person.homepage && (
                            <a
                                href={person.homepage}
                                target="_blank"
                                className="text-sm underline"
                            >
                                Official Website
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
