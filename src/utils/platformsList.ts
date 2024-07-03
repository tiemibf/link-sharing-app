import { IconCodewars, IconDevto, IconFacebook, IconFreecodecamp, IconFrontendMentor, IconGithub, IconGitlab, IconHashnode, IconLinkedin, IconStackOverflow, IconTwitch, IconTwitter, IconYoutube } from "../assets";
import { vars } from "../styles/theme.css";

export type Platform = {
  id: number;
  name: string;
  icon: React.FunctionComponent;
  backgroundColor: string;
}

export const platformsList: Platform[] = [{
  id: 1,
  name: 'GitHub',
  icon: IconGithub,
  backgroundColor: '#1A1A1A'
},
{
  id: 2,
  name: 'Frontend Mentor',
  icon: IconFrontendMentor,
  backgroundColor: '#67BECE'
},
{
  id: 3,
  name: 'Twitter',
  icon: IconTwitter,
  backgroundColor: '#43B7E9'
},
{
  id: 4,
  name: 'Linkedin',
  icon: IconLinkedin,
  backgroundColor: '#2D68FF'
},
{
  id: 5,
  name: 'Youtube',
  icon: IconYoutube,
  backgroundColor: '#EE3939'
},
{
  id: 6,
  name: 'Facebook',
  icon: IconFacebook,
  backgroundColor: '#2442AC'
},
{
  id: 7,
  name: 'Twitch',
  icon: IconTwitch,
  backgroundColor: '#EE3FC8'
},
{
  id: 8,
  name: 'Dev.to',
  icon: IconDevto,
  backgroundColor: vars.color.darkGray
},
{
  id: 9,
  name: 'Codewars',
  icon: IconCodewars,
  backgroundColor: '#8A1A50'
},
{
  id: 10,
  name: 'freeCodeCamp',
  icon: IconFreecodecamp,
  backgroundColor: '#302267'
},
{
  id: 11,
  name: 'GitLab',
  icon: IconGitlab,
  backgroundColor: '#EB4925'
},
{
  id: 12,
  name: 'Hashnode',
  icon: IconHashnode,
  backgroundColor: '#0330D1'
},
{
  id: 13,
  name: 'Stack Overflow',
  icon: IconStackOverflow,
  backgroundColor: '#EC7100'
},
]