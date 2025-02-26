import "./projects.css";
import { ProjNavbar } from "./ProjNavFooter";
import { projectFillerImage } from "../../assets/images/project-images/project-images";

const projects = [
  {
    title: "sample 1",
    date: "March 2024",
    materials: "cotton canvas fabric, polyester thread",
    image: projectFillerImage,
    alt: "sample of a muted pale pink",
  },
  {
    title: "sample 2",
    date: "January 2024",
    materials: "acrylic yarn",
    image: projectFillerImage,
    alt: "sample of a muted pale pink",
  },
  {
    title: "sample 3",
    date: "December 2023",
    materials: "acrylic yarn",
    image: projectFillerImage,
    alt: "sample of a muted pale pink",
  },
];

function ProjectTile({ project }) {
  return (
    <div className="projectTile">
      <img className="projectImage" src={project.image} alt={project.alt} />
      <h2 className="projectTitle">{project.title}</h2>
      <h3 className="projectDate">{project.date}</h3>
      <p className="projectMaterials">materials: {project.materials}</p>
    </div>
  );
}

function ProjectsGallery() {
  return (
    <div className="page-container">
      <ProjNavbar />
      <div className="page-content">
        <h1 className="projectPageTitle">experimenting & other projects</h1>
        <h2 className="projectPageSubTitle">
          ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆ a gallery to document my progress ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆{" "}
        </h2>
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
