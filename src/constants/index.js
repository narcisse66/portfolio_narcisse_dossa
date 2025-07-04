import {
  PiTwitterLogoThin,
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiEnvelopeSimpleThin,
} from "react-icons/pi";
import { GoHome } from "react-icons/go";

import {
  PiUser,
  PiBagLight,
  PiEnvelopeOpenLight,
  PiStackLight,
} from "react-icons/pi";

export const shareData = [
  {
    id: 1,
    href: "https://x.com/@NarD6105",
    alt: "Twitter Icon",
    Icon: PiTwitterLogoThin,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/narcisse-dossa-620b58290",
    alt: "Linkedin Icon",
    Icon: PiLinkedinLogoLight,
  },
  {
    id: 3,
    href: "https://github.com/narcisse66",
    alt: "Github Icon",
    Icon: PiGithubLogoLight,
  },
  {
    id: 4,
    href: "mailto:dossanarcisse@242",
    alt: "Mail Icon",
    Icon: PiEnvelopeSimpleThin,
  },
];

export const LinkData = [
  { id: 1, to: "/", label: "Home", Icon: GoHome },
  { id: 2, to: "/about", label: "About", Icon: PiUser },
  { id: 3, to: "/projects", label: "Projects", Icon: PiBagLight },
  { id: 4, to: "/skill", label: "Skills", Icon: PiStackLight },
  { id: 5, to: "/contact", label: "Contact", Icon: PiEnvelopeOpenLight },
];
