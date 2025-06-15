import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PreviewCard } from "../../components/PreviewCard";
import { Link } from "../../models/Links";
import { linksTabContainer } from "./LinksTab.css";
import { CustomizeLinksCard } from "./components/CustomizeLinksCard";

interface LinksTabProps {
  savedLinks: Link[];
  savedProfileDetails: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: FileList | null;
  };
  onSaveLinks: (links: Link[]) => void;
}

export const LinksTab = ({ savedLinks, savedProfileDetails, onSaveLinks }: LinksTabProps) => {
  const { reset, getValues, formState: { isDirty } } = useFormContext();

  useEffect(() => {
    const currentValues = getValues();
    reset({
      ...currentValues,
      links: savedLinks
    });
  }, [savedLinks, reset, getValues]);

  const handleSave = () => {
    const currentValues = getValues();
    onSaveLinks(currentValues.links);
    reset(currentValues);
  };

  return (
    <div className={linksTabContainer}>
      <PreviewCard savedLinks={savedLinks} savedProfileDetails={savedProfileDetails} />
      <CustomizeLinksCard onSave={handleSave} />
    </div>
  );
};
