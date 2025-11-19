
import { getPeople } from "@/services/get-people";
import Image from "next/image";
import Link from "next/link";

export default async function PeoplePage() {
    const people = await getPeople();
    return (
        <main className="min-h-screen px-6 py-20">
            <h1 className="text-3xl font-bold mb-6">Popular People</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {people.map((person) => (
                    <Link
                        key={person.id}
                        href={`/people/${person.id}`}
                        className="border rounded-2xl shadow hover:shadow-lg transition"
                    >
                        <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden bg-gray-100">
                            <Image
                                src={
                                    person.profile_path
                                        ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                                        : "/images/image-placeholder.png"
                                }
                                alt={person.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-2">
                            <h2 className="font-semibold text-lg">{person.name}</h2>
                            <p className="text-sm">Popularity: {person.popularity.toFixed(1)}</p>
                            <div className="mt-1">
                                <ul className="text-sm text-gray-600 list-disc list-inside">
                                    {person.known_for.map((work) => (
                                        <li key={work.id}>
                                            {work.title || work.name} ({work.media_type.toUpperCase()})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
