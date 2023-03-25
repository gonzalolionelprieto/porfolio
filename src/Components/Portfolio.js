// Componente Portfolio
import Project from './Project';

function Portfolio({ projects }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-white">Mis proyectos</h2>
      <p className="text-xl text-center mb-10 text-white">Algunos de mis trabajos realizados</p>
      
      <div className="grid  gap-4 ">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
