import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from './components/ProjectCards/project';
import Skills from './components/Skills/skills';
import Contact from "./components/Contact/contact";
import Socials from "./components/Socials/socials";
import projects from './project.json';



function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="row myProjects">
        {projects.map((project) => (
          <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} buttonText={project.buttonText} />
        ))}
      </div>
      <Skills />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
