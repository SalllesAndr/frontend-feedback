import Image from "@/components/atoms/Image";
import { Github, Linkedin } from "lucide-react";

export default function AboutUs() {
  const developers = [
    {
      name: "Alex Schlup",
      role: "Java Developer",
      linkedin: "https://www.linkedin.com/in/alex-schlup-hoffmann-b0288027a/",
      github: "https://github.com/Schlup",
      image: "/images/home/team/alex.jpeg",
    },
    {
      name: "Anderson Salles",
      role: "Cloud Architect | DevOps",
      linkedin: "https://www.linkedin.com/in/anderson-p-sales-/",
      github: "https://github.com/SalllesAndr",
      image: "/images/home/team/anderson.png",
    },
    {
      name: "Diogo Henrique",
      role: "System Analyst",
      linkedin: "https://www.linkedin.com/in/anderson-p-sales-/",
      github: "https://github.com/SalllesAndr",
      image: "/images/home/team/diogo.jpeg",
    },
    {
      name: "Jussara Hellen",
      role: "Sales Representative",
      linkedin: "https://www.linkedin.com/in/anderson-p-sales-/",
      github: "https://github.com/SalllesAndr",
      image: "/images/home/team/jussara.jpeg",
    },
    {
      name: "Larissa Sousa",
      role: "System Analyst",
      linkedin: "https://www.linkedin.com/in/anderson-p-sales-/",
      github: "https://github.com/SalllesAndr",
      image: "/images/home/team/larissa.jpeg",
    },
    {
      name: "Eduardo Rothbarth",
      role: "Network Engineer",
      linkedin: "www.linkedin.com/in/eduardo-rothbarth-623127242",
      github: "https://github.com/SalllesAndr",
      image: "/images/home/team/eduardo.jpeg",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 flex flex-col items-center space-y-4"
          >
            <Image
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-md object-cover"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {dev.name}
              </h3>
              <p className="text-gray-600">{dev.role}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-2 rounded-full text-fb-white-200 hover:text-blue-700"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-2 rounded-full text-fb-white-200 hover:text-gray-500"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
