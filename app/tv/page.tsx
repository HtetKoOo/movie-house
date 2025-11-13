import { TvShowTabs } from "@/components/tv-show/tab"
import TopRatedTvPage from "./top-rated/page"
import PopularTvPage from "./popular/page"
import AiringTodayTvPage from "./airing-today/page"
import OnAirTvPage from "./on-the-air/page"

export default function TvShowPage() {
    const tabs = [
        {
            label: "Top Rated",
            value: "top-rated",
            content: <TopRatedTvPage />,
        },
        {
            label: "Popular",
            value: "popular",
            content: <PopularTvPage/>,
        },
        {
            label: "Air Today",
            value: "air-today",
            content: <AiringTodayTvPage/>,
        },
        {
            label: "On Air",
            value: "on-air",
            content: <OnAirTvPage/>,
        },
    ]

    return <TvShowTabs tabs={tabs} />
}
