import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { IconArrowRight, IconLink } from "../../assets";
import { useTab } from "../../contexts/TabContext";
import { Link } from "../../models/Links";
import { Platform, platformsList } from "../../utils/platformsList";
import { Card } from "../Card";
import { CellphoneMockup } from "../CellphoneMockup";
import { Icon } from "../Icon";
import {
  emptyMockupItem,
  getLinkButtonStyle,
  linksWrapper,
  platformNameContainer,
  previewCard,
} from "./PreviewCard.css";

interface PreviewCardProps {
  savedLinks?: Link[];
  savedProfileDetails?: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: FileList | null;
  };
}

export const PreviewCard = ({ savedLinks, savedProfileDetails }: PreviewCardProps) => {
  const array = Array.from({ length: 5 });
  const { watch } = useFormContext();
  const { currentTab } = useTab();
  const formValues = watch();

  // For Links tab: use form values for links, saved values for profile details
  // For Profile Details tab: use saved values for links, form values for profile details
  const links = currentTab === 'links' ? (formValues?.links || []) : (savedLinks || []);

  const itemProperty = (
    platformName: string,
    property: keyof Omit<Platform, "id">,
  ): string | React.FunctionComponent | null => {
    const platform = platformsList.find(
      (platform) => platform.name === platformName,
    );

    return platform?.[property] ?? null;
  };

  return (
    <Card className={previewCard} height="auto">
      <CellphoneMockup savedProfileDetails={savedProfileDetails}>
        <div className={linksWrapper}>
          {array.map((_, index) => {
            const item: Link = links[index];
            return item ? (
              <MockupItemPreview
                key={item.id}
                url={item.platformUrl}
                platformName={item.platformName}
                backgroundColor={
                  (itemProperty(
                    item.platformName,
                    "backgroundColor",
                  ) as string) ?? "#eee"
                }
                platformIcon={
                  (itemProperty(
                    item.platformName,
                    "icon",
                  ) as FunctionComponent) ?? IconLink
                }
              />
            ) : (
              <div key={`empty-${index}`} className={emptyMockupItem} />
            );
          })}
        </div>
      </CellphoneMockup>
    </Card>
  );
};

interface MockupItemPreviewProps {
  url: string;
  platformName: string;
  platformIcon: FunctionComponent;
  backgroundColor: string;
}

const MockupItemPreview = ({
  url,
  platformName,
  platformIcon,
  backgroundColor,
}: MockupItemPreviewProps) => {
  return (
    <button
      onClick={() => window.location.assign(url)}
      className={getLinkButtonStyle()}
      style={assignInlineVars({ backgroundColor })}
    >
      <div className={platformNameContainer}>
        <Icon icon={platformIcon} size="14px" color="white" />
        {platformName}
      </div>
      <Icon icon={IconArrowRight} />
    </button>
  );
};
