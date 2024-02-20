import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from './components/ProjectCard/project';
import projects from './project.json';


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      {projects.map((project) => (
        <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} buttonText={project.buttonText} />
      ))}
    </div>
  );
}

export default App;
