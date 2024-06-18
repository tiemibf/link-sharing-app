import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Link } from "../../models/Links"
import { useGetLinks } from "../../services/LinksService/useGetLinks"
import { linksTabContainer } from "./LinksTab.css"
import { CustomizeLinksCard } from "./components/CustomizeLinksCard"
import { PreviewCard } from "./components/PreviewCard"

type LinkForm = {
    links: Link[]
}

export const LinksTab = () => {
    const { data: linksData } = useGetLinks()
    const methods = useForm<LinkForm>({
        defaultValues: { links: linksData }
    });
    const { reset } = methods;

    useEffect(() => {
        reset({ links: linksData });
    }, [linksData, reset]);

    return (
        <FormProvider {...methods}>
            <div className={linksTabContainer}>
                <PreviewCard />
                {linksData && <CustomizeLinksCard />}
            </div>
        </FormProvider>
    )
}