export default function TvLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="pt-20 min-h-screen px-2 md:px-4">
            {children}
        </main>
    )
}