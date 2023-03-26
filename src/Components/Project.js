import { IoLogoGithub } from "react-icons/io5";

function Project({ project }) {
  const {
    title,
    description,
    img,
    technologies,
    githubLink,
    liveDemoLink,
    Reverse,
  } = project;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden grid md:grid-rows-1 md:grid-cols-2 md:gap-4 py-5">
      <div
        className={`bg-white  md:h-auto md:w-full  relative rounded-3xl p-3  ${
          Reverse ? "md:order-last" : ""
        } `}
      >
        <img
          className="w-full h-full object-cover  rounded-xl"
          src={img}
          alt={title}
        />
      </div>
      <div className="p-6 flex flex-col md:justify-around items-center align-middle">
        <h3 className="font-bold text-2xl ">{title}</h3>
        <p className="text-lg ">{description}</p>
        <div className="flex flex-wrap justify-start gap-2 my-3 ">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 px-3 py-1 rounded-lg text-sm md:bold font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="container-icon text-black px-4 py-2 rounded-lg hover:text-cyan-600 transition-colors duration-300"
          >
            Github
            <IoLogoGithub color="#292929" fontSize="2.5em" className="html" />
          </a>
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="container-icon text-black px-4 py-2 rounded-lg hover:text-cyan-600 transition-colors duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
