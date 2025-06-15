import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PreviewCard } from "../../components/PreviewCard";
import { Link } from "../../models/Links";
import { linksTabContainer } from "./LinksTab.css";
import { CustomizeLinksCard } from "./components/CustomizeLinksCard";

interface LinksTabProps {
  savedLinks: Link[];
  onSaveLinks: (links: Link[]) => void;
}

export const LinksTab = ({ savedLinks, onSaveLinks }: LinksTabProps) => {
  const { reset, getValues, formState: { isDirty } } = useFormContext();

  useEffect(() => {
    const currentValues = getValues();
    reset({
      ...currentValues,
      links: savedLinks
    });
  }, [savedLinks, reset, getValues]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleSave = () => {
    const currentValues = getValues();
    onSaveLinks(currentValues.links);
    reset(currentValues);
  };

  return (
    <div className={linksTabContainer}>
      <PreviewCard savedLinks={savedLinks} />
      <CustomizeLinksCard onSave={handleSave} />
    </div>
  );
};
