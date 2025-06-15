import { FormProvider, useForm } from "react-hook-form";
import { IconLink, IconProfileDetailsHeader, LogoDevlinksLarge } from "../../assets";
import { Card } from "../../components/Card";
import Icon from "../../components/Icon/Icon";
import { Tab } from "../../components/Tab";
import { Link } from "../../models/Links";
import { useGetLinks } from "../../services/LinksService/useGetLinks";
import { LinksTab } from "../LinksTab/LinksTab";
import { ProfileDetailsTab } from "../ProfileDetailsTab";
import {
  appHeader,
  devLinksLogo,
  tabContentStyle,
  tabItemStyle,
} from "./EditPage.css";

type LinkForm = {
  links: Link[];
  profilePicture: FileList | null;
  firstName: string;
  lastName: string;
  email: string;
};

export const EditPage = () => {
  const { data: linksData } = useGetLinks();
  const methods = useForm<LinkForm>({
    defaultValues: {
      links: linksData,
      firstName: '',
      lastName: '',
      email: '',
      profilePicture: null
    },
  });

  return (
    <FormProvider {...methods}>
      <Tab.Root defaultValue="links">
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
          <LinksTab />
        </Tab.Content>
        <Tab.Content value="profileDetails" className={tabContentStyle}>
          <ProfileDetailsTab />
        </Tab.Content>
      </Tab.Root>
    </FormProvider>
  );
};
