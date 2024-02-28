import Jumbotron from "./components/Jumbotron/Jumbotron";
import NavBar from "./components/Navbar/Navbar";
import ProjectCard from './components/ProjectCards/project';
import Skills from './components/Skills/skills';
import Contact from "./components/Contact/contact";
import Socials from "./components/Socials/socials";
import Footer from "./components/Footer/footer";
import projects from './project.json';



function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <div className="row myProjects">
        {projects.map((project) => (
          <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} github={project.github} deployed={project.deployed} deployedPage={project.deployedPage} githubPage={project.githubPage} />
        ))}
      </div>
      <Skills />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
