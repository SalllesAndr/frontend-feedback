import Image from "../atoms/Image";
import Link from "../atoms/Link";

interface NavBarProps {
  links?: Links[];
  className?: string;
  logoClassName?: string;
  logoHref?: string;
  spacing: string;
  blur?: boolean;
}

export default function NavBar({
  links,
  className,
  logoClassName,
  logoHref,
  spacing,
  blur,
}: NavBarProps) {
  return (
    <header
      className={`fixed top-0 left-0 w-screen flex items-center justify-center z-20 ${className} ${
        blur ? "bg-fb-pink-500 backdrop-blur-md" : ""
      } px-8 2xl:px-0`}
    >
      <nav
        className={`w-full m-auto flex justify-between items-center ${spacing}`}
      >
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link
              labelClassName="text-5xl font-bold text-fb-white-100"
              href={logoHref || "/"}
              icon={
                <Image
                  className={logoClassName}
                  src="/logo/logo.svg"
                  alt="T Systems Logo"
                />
              }
              label="Systems"
            />
          </div>
        </div>
        <ul className="hidden items-center justify-between gap-8 sm:flex mr-10">
          {links?.map((link) => (
            <li key={link.key}>{link.prop}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
