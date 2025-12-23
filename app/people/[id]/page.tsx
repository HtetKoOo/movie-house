import { getPeopleDetails } from "@/services/get-people-details";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

export default async function PersonPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const person = await getPeopleDetails(id);

    return (
        <main className="min-h-screen flex flex-col sm:flex-row items-center sm:items-start pt-14 sm:px-4 sm:pt-16 gap-2">
            {/* LEFT */}
            <div className="flex flex-col w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 bg-amber-100">
                <Image
                    src={
                        person.profile_path
                            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                            : "/images/image-placeholder.png"
                    }
                    alt={person.name}
                    width={300}
                    height={450}
                    className="rounded-2xl w-1/3 mx-auto sm:w-full object-cover"
                />
                <div className="mt-2 flex flex-col items-center sm:items-start justify-center gap-1">
                    <h3 className="font-semibold text-xl ">{person.name}</h3>
                    <p className=" ">
                        <strong>Known for - </strong>{person.known_for_department}
                    </p>
                    <div className="flex gap-2 md:gap-4">
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="cursor-pointer"
                        >
                            <FaTwitter className="w-6 h-6 hover:text-[#1DA1F2]" />
                        </a>
                        <a
                            href="https://t.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <FaTelegram className="w-6 h-6 hover:text-[#229ED9]" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                        >
                            <FaGithub className="w-6 h-6 hover:text-[#6e7681]" />
                        </a>
                        <Link href="/about">
                            <Globe className="w-6 h-6 hover:text-green-400" />
                        </Link>
                    </div>
                    <p><strong>Gender - </strong>{person.gender === 1 ? "Female" : "Male"}</p>
                    <p className=""><strong>Birthday - </strong>{person.birthday}</p>
                    <p className=""><strong>Place of Birth - </strong>{person.place_of_birth}</p>
                </div>
            </div>


            {/* RIGHT */}
            <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/5 sm:mt-4 p-4">
                <h4 className="text-xl font-semibold mb-2">Biography</h4>
                <p>{person.biography}</p>
                
            </div>
        </main >
    );
}
