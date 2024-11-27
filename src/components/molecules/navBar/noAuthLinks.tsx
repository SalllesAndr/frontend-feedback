import Link from "../../atoms/Link";

interface linksInterface {
  key: string;
  label: string;
  href: string;
  className: string;
}

const links: linksInterface[] = [
  {
    key: "aboutUs",
    label: "About Us",
    href: "/aboutus",
    className:
      "text-fb-white-200 hover:text-fb-black-300 hover:text-fb-white-100",
  },
  {
    key: "signin",
    label: "Sign In",
    href: "/signin?user=student",
    className:
      "hover:bg-fb-pink-300 hover:bg-fb-gray-100 border-2 border-fb-black-200 focus:ring-4 focus:outline-none focus:fb-black-200 font-medium px-4 py-2 text-center",
  },
  {
    key: "signUp",
    label: "Sign Up",
    href: "/signup?user=student",
    className:
      "hover:bg-fb-gray-100 hover:text-fb-black-500 border-2 focus:ring-4 focus:outline-none focus:fb-black-200 font-medium px-6 py-2 text-center",
  },
];

export const noAuthLinks = () => {
  return links.map((link) => {
    return {
      key: link.key,
      prop: (
        <Link href={link.href} label={link.label} className={link.className} />
      ),
    };
  });
};
