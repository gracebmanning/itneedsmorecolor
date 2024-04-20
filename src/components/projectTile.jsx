const styles = {
  projectTile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "fitContent",
    width: "233px",
    margin: "10px"
  },
  projectImage: {
    height: "310px"
  },
  projectTitle: {
    margin: "0px"
  },
  projectDate: {
    margin: "0px"
  }
}

export function ProjectTile({project}){
    return(
      <div className="projectTile" style={styles.projectTile}>
        <img className="projectImage" src={project.image} alt={project.alt} style={styles.projectImage} />
        <h2 className="projectTitle" style={styles.projectTitle}>{project.title}</h2>
        <h3 className="projectDate" style={styles.projectDate}>{project.date}</h3>
        <p className="projectMaterials">materials: {project.materials}</p>
      </div>
    )
}