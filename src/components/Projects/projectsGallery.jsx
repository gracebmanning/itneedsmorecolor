import './projects.css';
import { ProjNavbar } from './ProjNavFooter';
import { crochetScarf1, tsunoBag } from '../../assets/images/project-images/project-images';

const projects = [
  {
    title: "tsuno bag",
    date: "March 2024",
    materials: "cotton canvas fabric, polyester thread",
    image: tsunoBag,
    alt: "green tsuno bag"
  },
  {
    title: "skinny scarf",
    date: "January 2024",
    materials: "acrylic yarn",
    image: crochetScarf1,
    alt: "skinny crochet scarf using colors of mustard, burnt orange, burgundy, and cream."
  },
]

function ProjectTile({project}){
    return(
      <div className="projectTile">
        <img className="projectImage" src={project.image} alt={project.alt} />
        <h2 className="projectTitle">{project.title}</h2>
        <h3 className="projectDate">{project.date}</h3>
        <p className="projectMaterials">materials: {project.materials}</p>
      </div>
    )
}

function ProjectsGallery() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1 className="projectPageTitle">experimenting & other projects</h1>
            <h2 className="projectPageSubTitle">⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆ a gallery to document my progress ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆ </h2>
            <div className="projectGallery">
              {projects.map((proj, index) => (
                  <ProjectTile key={index} project={proj} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default ProjectsGallery;
