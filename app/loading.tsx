import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex w-full items-center justify-center">
            <main className="flex w-full flex-col gap-8 pb-10">
                {/* Movie Slider Skeleton */}
                <div className="relative h-[50vh] w-full md:h-[70vh]">
                    <Skeleton className="h-full w-full" />
                </div>

                {/* Section Skeletons */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-4 px-4 md:px-12">
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-8 w-48" />
                            <Skeleton className="h-8 w-24 rounded-full" />
                        </div>
                        <div className="flex gap-4 overflow-hidden">
                            {[...Array(6)].map((_, j) => (
                                <div key={j} className="h-[300px] w-[200px] shrink-0">
                                    <Skeleton className="h-[280px] w-full rounded-xl" />
                                    <div className="mt-2 space-y-2">
                                        <Skeleton className="h-4 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
