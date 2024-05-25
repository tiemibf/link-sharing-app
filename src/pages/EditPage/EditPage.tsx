import { ReactSVG } from "react-svg"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import Icon from "../../components/Icon/Icon"
import { Tab } from "../../components/Tab"
import { LinksTab } from "../LinksTab/LinksTab"
import { appHeader, devLinksLogo, tabContentStyle, tabItemStyle } from "./EditPage.css"

const DEV_LINKS_LOGO = 'src/assets/images/logo-devlinks-large.svg'

export const EditPage = () => {
    return (
        <Tab.Root defaultValue="links" >
            <Card className={appHeader}>
                <ReactSVG src={DEV_LINKS_LOGO} className={devLinksLogo} />
                <Tab.List>
                    <Tab.Item value="links" className={tabItemStyle}>
                        <Icon name='link' />
                        Links
                    </Tab.Item>
                    <Tab.Item value="profileDetails" className={tabItemStyle} width="187px">
                        <Icon name='profile-details-header' />
                        Profile Details
                    </Tab.Item>
                </Tab.List>
                <Button variant='secondary' width='114px'>Preview</Button>
            </Card>
            <Tab.Content value="links" className={tabContentStyle}>
                <LinksTab />
            </Tab.Content>
        </Tab.Root>
    )
}