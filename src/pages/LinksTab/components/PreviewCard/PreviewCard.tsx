import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { IconArrowRight } from "../../../../assets";
import { Card } from "../../../../components/Card";
import Icon from "../../../../components/Icon/Icon";
import { Link } from "../../../../models/Links";
import { Platform, platformsList } from "../../../../utils/platformsList";
import { CellphoneMockup } from "../CellphoneMockup/CellphoneMockup";
import {
  emptyMockupItem,
  getLinkButtonStyle,
  linksWrapper,
  platformNameContainer,
  previewCard,
} from "./PreviewCard.css";

export const PreviewCard = () => {
  const array = Array.from({ length: 5 });
  const { watch } = useFormContext();
  const formValues = watch();

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
      <CellphoneMockup>
        <div className={linksWrapper}>
          {array.map((_, index) => {
            const item: Link = formValues?.links?.[index];
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
                  ) as FunctionComponent) ?? "placeholder"
                }
              />
            ) : (
              <div className={emptyMockupItem} />
            );
          })}
        </div>
      </CellphoneMockup>
    </Card>
  );
};

export type MockupItemPreviewProps = {
  url: string;
  platformName: string;
  platformIcon: React.FunctionComponent;
  backgroundColor: string;
};

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
