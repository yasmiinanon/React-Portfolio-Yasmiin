import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import ProjectCard from './components/ProjectCard';
import Wrapper from './components/Wrapper';
import projects from './project.json';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Wrapper>
      <ProjectCard
        name={projects[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        location={projects[0].location}
      />
      <ProjectCard
        name={projects[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
        location={projects[1].location}
      />
      <ProjectCard
        name={projects[2].name}
        image={projects[2].image}
        occupation={projects[2].occupation}
        location={projects[2].location}
      />
    </Wrapper>
    </div>
  );
}

export default App;
