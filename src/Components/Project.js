import { IoLogoGithub } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

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
    <div className=" bg-white dark:bg-[#2d015a] rounded-lg shadow-md overflow-hidden grid md:grid-rows-1 md:grid-cols-2 md:gap-4 py-5 my-5">
      <div
        className={`  md:h-auto md:w-full  relative rounded-3xl p-3  ${
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
        <h3 className="font-bold text-2xl dark:text-slate-100 md:border-spacing-3 dark:border-b-2 dark:border-b-fuchsia-400 ">
          {title}
        </h3>
        <p className="text-lg dark:text-slate-100 tracking-tight py-3">
          {description}
        </p>
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
        <div className="flex justify-center items-center w-full">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="container-icon text-black my-2 rounded-lg hover:scale-125  duration-300 flex justify-center items-center"
          >
            <IoLogoGithub color="#f1f5f9" fontSize="2em" className="" />
          </a>

          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="container-icon text-black my-2 mx-3 rounded-lg hover:scale-125  duration-300 flex justify-center items-center"
          >
            <FiExternalLink color="#f1f5f9" fontSize="2em" className="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
