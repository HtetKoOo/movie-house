import { Code } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-6 border-t rounded-t-2xl">
            <div className="px-4 md:px-8 flex flex-col md:flex-row items-center justify-between text-xs gap-2">
                <p className="bg-gray-500/20 px-4 py-2 rounded-2xl">© {new Date().getFullYear()} Movie House. All rights reserved.</p>
                <p className="bg-gray-500/20 px-4 py-2 rounded-2xl"><Code className="inline-block mr-1" />Developed by MimCookThiee.</p>
            </div>
        </footer>
    );
}
