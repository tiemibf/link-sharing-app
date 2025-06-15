import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useGetLinks } from "../../services/LinksService/useGetLinks";
import { linksTabContainer } from "./LinksTab.css";
import { CustomizeLinksCard } from "./components/CustomizeLinksCard";
import { PreviewCard } from "./components/PreviewCard";


export const LinksTab = () => {
  const { data: linksData } = useGetLinks();
  const { reset } = useFormContext();

  useEffect(() => {
    reset({ links: linksData });
  }, [linksData, reset]);

  return (

    <div className={linksTabContainer}>
      <PreviewCard />
      {linksData && <CustomizeLinksCard />}
    </div>
  );
};
