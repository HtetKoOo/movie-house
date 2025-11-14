import { Code, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full py-4 border-t rounded-t-2xl mt-8">
            <div className="px-4 flex flex-col md:flex-row items-center justify-between text-xs gap-3">

                {/* Left */}
                <p className="bg-gray-500/20 px-4 py-2 rounded-2xl">
                    © {new Date().getFullYear()} Movie House. All rights reserved.
                </p>

                {/* Middle */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-2">

                    {/* Email */}
                    <div className="flex items-center gap-1 bg-gray-500/20 px-4 py-2 rounded-2xl">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:mimcookthiii2532@gmail.com" className="hover:underline">
                            mimcookthiii2532@gmail.com
                        </a>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4 bg-gray-500/20 px-4 py-2 rounded-2xl">
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-4 h-4 hover:text-[#1DA1F2]" />
                        </a>
                        <a
                            href="https://t.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <FaTelegram className="w-4 h-4 hover:text-[#229ED9]" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                        >
                            <FaGithub className="w-4 h-4 hover:text-[#6e7681]" />
                        </a>
                        <Link href="/about">
                            <Globe className="w-4 h-4 hover:text-green-400" />
                        </Link>
                    </div>

                </div>

                {/* Right */}
                <p className="bg-gray-500/20 px-4 py-2 rounded-2xl">
                    <Code className="inline-block mr-1 w-4 h-4" />
                    Developed by MimCookThiee.
                </p>
            </div>
        </footer>
    );
}
