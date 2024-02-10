export function ProjectTile({project}){
    return(
      <div className="projectTile">
        <img className="projectImage" src={project.image} alt={project.alt} />
        <h2 className="projectTitle">{project.title}</h2>
        <h3 className="projectDate">{project.date}</h3>
        <p>materials: {project.materials}</p>
      </div>
    )
  }