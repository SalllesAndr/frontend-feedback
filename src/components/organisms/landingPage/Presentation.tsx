import Image from "@/components/atoms/Image";
import Link from "@/components/atoms/Link";

export default function Presentation() {
  return (
    <section className="flex xl:justify-between justify-start items-center h-auto flex-col mt-28 xl:flex-row">
      <div className="lg:max-w-xl mt-[-10]">
        <p className="text-6xl xl:text-9xl font-light font-poppins leading-3">
          Feedback
        </p>
        <div className="flex items-center">
          <p className="text-6xl xl:text-9xl  font-light font-poppins tracking-tight mr-4">
            project
          </p>
        </div>
        <p className="mt-6 text-2xl leading-8">
          T-Academy - Ready Proway - Class 01.
        </p>
        <div className="flex gap-5 xl:gap-10 mt-8 xl:mt-20 flex-col md:flex-row">
          <Link
            href="/signin?user=teacher"
            label="Sign in as teacher"
            className="bg-fb-pink-500 hover:bg-fb-pink-300 text-fb-white-100 xl:w-56 transition-colors ease-in-out focus:ring-4 focus:outline-none focus:border-fb-gray-500 font-medium px-8 py-2 text-center flex items-center justify-center"
          />
          <Link
            href="/signup?user=teacher"
            label="Sign up as teacher"
            className="bg-fb-white-100 text-fb-black-400 hover:bg-fb-pink-400 hover:text-fb-white-100 w-56 border-2 transition-colors ease-in-out focus:ring-4 focus:outline-none focus:border-fb-gray-500 font-medium text-center flex items-center justify-center"
          />
        </div>
      </div>
      <Image
        src="/images/home/presentation.png"
        alt="Presentation Image"
        className="w-96 h-96  md:h-[42rem] md:w-[42rem] md:-ml-4 lg:-ml-0 mr-[-2rem]"
      />
    </section>
  );
}
