import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IconLink, IconProfileDetailsHeader, LogoDevlinksLarge } from "../../assets";
import { Card } from "../../components/Card";
import { Icon } from "../../components/Icon";
import { Tab } from "../../components/Tab";
import { useTab } from "../../contexts/TabContext";
import { LinkForm } from "../../models/Forms";
import { Link } from "../../models/Links";
import { LinksTab } from "../LinksTab/LinksTab";
import { ProfileDetailsTab } from "../ProfileDetailsTab/ProfileDetailsTab";
import { appHeader, devLinksLogo, tabContentStyle, tabItemStyle } from "./EditPage.css";

export const EditPage = () => {
  const [savedLinks, setSavedLinks] = useState<Link[]>([]);
  const [savedProfileDetails, setSavedProfileDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: null as FileList | null
  });
  const { setCurrentTab } = useTab();

  const methods = useForm<LinkForm>({
    defaultValues: {
      links: savedLinks,
      firstName: savedProfileDetails.firstName,
      lastName: savedProfileDetails.lastName,
      email: savedProfileDetails.email,
      profilePicture: savedProfileDetails.profilePicture
    },
  });

  const handleSaveLinks = (links: Link[]) => {
    setSavedLinks(links);
  };

  const handleSaveProfileDetails = (profileDetails: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: FileList | null;
  }) => {
    setSavedProfileDetails(profileDetails);
  };

  return (
    <FormProvider {...methods}>
      <Tab.Root defaultValue="links" onValueChange={(value) => setCurrentTab(value as 'links' | 'profileDetails')}>
        <Card className={appHeader}>
          <LogoDevlinksLarge className={devLinksLogo} />
          <Tab.List>
            <Tab.Item value="links" className={tabItemStyle}>
              <Icon icon={IconLink} />
              Links
            </Tab.Item>
            <Tab.Item
              value="profileDetails"
              className={tabItemStyle}
              width="187px"
            >
              <Icon icon={IconProfileDetailsHeader} />
              Profile Details
            </Tab.Item>
          </Tab.List>
          {/* <Button variant="secondary" width="114px">
              Preview
            </Button> */}
          <div />
        </Card>
        <Tab.Content value="links" className={tabContentStyle}>
          <LinksTab
            savedLinks={savedLinks}
            savedProfileDetails={savedProfileDetails}
            onSaveLinks={handleSaveLinks}
          />
        </Tab.Content>
        <Tab.Content value="profileDetails" className={tabContentStyle}>
          <ProfileDetailsTab
            savedLinks={savedLinks}
            savedProfileDetails={savedProfileDetails}
            onSaveProfileDetails={handleSaveProfileDetails}
          />
        </Tab.Content>
      </Tab.Root>
    </FormProvider>
  );
};
