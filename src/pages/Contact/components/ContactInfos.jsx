import ContactLink from "../../../components/ContactLink";

import {
  PiEnvelopeSimpleThin,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiLinkThin,
  PiPhoneThin,
  PiTwitterLogoThin,
} from "react-icons/pi";

const contactData = [
  {
    id: 1,
    name: "Twitter",
    href: "https://x.com/@NarD6105",
    alt: "Twitter Icon",
    Icon: PiTwitterLogoThin,
  },
  {
    id: 2,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/narcisse-dossa-620b58290",
    alt: "Linkedin Icon",
    Icon: PiLinkedinLogoLight,
  },
  {
    id: 3,
    name: "Github",
    href: "https://github.com/narcisse66",
    alt: "Github Icon",
    Icon: PiGithubLogoLight,
  },
  {
    id: 4,
    name: "Mail",
    href: "mailto:dossanarcisse@242",
    alt: "Mail Icon",
    Icon: PiEnvelopeSimpleThin,
  },
];

const ContactInfos = () => {
  return (
    <div className="mt-8 flex w-full flex-col items-start justify-start space-y-8 lg:w-1/2">
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-custom-black-10 lg:text-lg">
          Contact
        </h4>

        <ul className="ml-2 flex flex-col items-start space-y-2">
          <li>
            <ContactLink
              Icon={PiLinkThin}
              href={"##"}
              text={"https://github.com/narcisse66.com"}
            />
          </li>

          <li>
            <ContactLink
              Icon={PiPhoneThin}
              href={"##"}
              text={"+229 95 57 32 62"}
            />
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-custom-black-10 lg:text-lg">
          Social
        </h4>

        <ul className="ml-2 flex flex-col items-start justify-start gap-3 space-y-2">
          {contactData.map((link, index) => (
            <li
              key={index}
              className="inline-flex cursor-pointer items-center gap-1"
            >
              <ContactLink Icon={link.Icon} href={link.href} text={link.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfos;
