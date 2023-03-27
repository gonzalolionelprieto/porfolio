// Componente Portfolio
import Project from "./Project";

function Portfolio({ projects }) {
  return (
    <div className="container mx-auto px-4 py-12">
      

      <div className="grid  gap-4 ">
        <h3 className=" w-full font-bold text-xl leading-tight text-sky-600 ">
          Portfolio
        </h3>

        <h1 className=" w-full mt-2 text-4xl font-bold text-gray-800 ">
          Each project is a unique piece of development
        </h1
        >
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
