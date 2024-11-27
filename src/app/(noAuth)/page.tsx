import AboutUs from "@/components/organisms/landingPage/AboutUs";
import Footer from "@/components/organisms/landingPage/Footer";
import Presentation from "@/components/organisms/landingPage/Presentation";
import TemplateNoAuth from "@/components/templates/TemplateNoAuth";
import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <TemplateNoAuth>
        <Presentation />
        <AboutUs />
      </TemplateNoAuth>
      <Footer />
    </>
  );
}
