import { IconLink, IconProfileDetailsHeader, LogoDevlinksLarge } from "../../assets";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import Icon from "../../components/Icon/Icon";
import { Tab } from "../../components/Tab";
import { LinksTab } from "../LinksTab/LinksTab";
import { ProfileDetailsTab } from "../ProfileDetailsTab/ProfileDetailsTab";
import {
  appHeader,
  devLinksLogo,
  tabContentStyle,
  tabItemStyle,
} from "./EditPage.css";

export const EditPage = () => {
  return (
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
        <Button variant="secondary" width="114px">
          Preview
        </Button>
      </Card>
      <Tab.Content value="links" className={tabContentStyle}>
        <LinksTab />
      </Tab.Content>
      <Tab.Content value="profileDetails" className={tabContentStyle}>
        <ProfileDetailsTab />
      </Tab.Content>
    </Tab.Root>
  );
};
