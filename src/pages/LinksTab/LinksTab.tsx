import { useGetLinks } from "../../services/LinksService/useGetLinks"
import { linksTabContainer } from "./LinksTab.css"
import { CustomizeLinksCard } from "./components/CustomizeLinksCard"
import { PreviewCard } from "./components/PreviewCard"

export const LinksTab = () => {
    const { data: linksData } = useGetLinks()

    return (
        <div className={linksTabContainer}>
            <PreviewCard />
            {linksData && <CustomizeLinksCard linksData={linksData} />}
        </div>
    )
}