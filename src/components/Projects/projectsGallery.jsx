import "./projects.css";
import { ProjNavbar } from "./ProjNavFooter";
import { projectFillerImage } from "../../assets/images/project-images/project-images";

const projects = [
  {
    title: "sample 1",
    date: "Month 2024",
    materials: "[materials list]",
    image: projectFillerImage,
    alt: "sample of a muted pale pink",
  },
  {
    title: "sample 2",
    date: "Month 2024",
    materials: "[materials list]",
    image: projectFillerImage,
    alt: "sample of a muted pale pink",
  },
  {
    title: "sample 3",
    date: "Month 2023",
    materials: "[materials list]",
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
        <h1 className="projectPageTitle">project gallery</h1>
        <h2 className="projectPageSubTitle">
          ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆ example project gallery ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆{" "}
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
