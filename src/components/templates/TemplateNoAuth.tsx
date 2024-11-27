import { noAuthLinks } from "../molecules/navBar/noAuthLinks";
import NavBar from "../organisms/Navbar";

interface TemplateNoAuthProps {
  withlinks?: boolean;
  children: React.ReactNode;
}

export default function TemplateNoAuth({
  withlinks = true,
  children,
}: TemplateNoAuthProps) {
  return (
    <>
      <NavBar
        links={withlinks ? noAuthLinks() : []}
        className="h-24"
        spacing="max-w-screen-2xl"
        blur={true}
      />
      <main className="max-w-screen-2xl mx-auto px-4 lg:px-10 2xl:pl-4 pr-4 mt-10 mb-10">
        <div className="">{children}</div>
      </main>
    </>
  );
}
