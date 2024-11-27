import { LogOut } from "lucide-react";
import Link from "../../atoms/Link";

interface linksInterface {
  key: string;
  label: string;
  href: string;
  className: string;
}

const links: linksInterface[] = [
  {
    key: "sair",
    label: "Sair",
    href: "/signout",
    className:
      "text-fb-white-200 hover:text-fb-black-300 hover:text-fb-white-100",
  },
];

export const authLinks = () => {
  return links.map((link) => {
    return {
      key: link.key,
      prop: (
        <Link
          href={link.href}
          label={link.label}
          className={link.className}
          icon={<LogOut />}
        />
      ),
    };
  });
};
