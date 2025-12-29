import { Skeleton } from "@/components/ui/skeleton";

export default function PersonLoading() {
    return (
        <main className="min-h-screen flex flex-col sm:flex-row items-center sm:items-start pt-14 sm:px-4 sm:pt-16 gap-2">
            {/* LEFT */}
            <div className="flex flex-col w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 rounded-2xl">
                {/* Image Skeleton */}
                <div className="w-1/3 mx-auto sm:w-full aspect-[2/3] relative mb-4">
                    <Skeleton className="h-full w-full rounded-2xl" />
                </div>

                <div className="mt-2 flex flex-col items-center sm:items-start justify-center gap-2 w-full">
                    {/* Name */}
                    <Skeleton className="h-7 w-3/4" />

                    {/* Known for */}
                    <Skeleton className="h-4 w-1/2" />

                    {/* Social Icons */}
                    <div className="flex gap-2 md:gap-4 my-1">
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="w-6 h-6 rounded-full" />
                    </div>

                    {/* Personal Details */}
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-4/5" />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/5 sm:mt-4 p-4 space-y-4">
                {/* Bio Title */}
                <Skeleton className="h-8 w-1/4 mb-2" />

                {/* Bio Text */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[95%]" />
                    <Skeleton className="h-4 w-[85%]" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
        </main>
    );
}
