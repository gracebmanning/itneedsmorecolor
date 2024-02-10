import { ProjNavbar, ProjFooter } from '../ProjNavFooter';
import { crochetScarf1 } from '../../assets/images/project-images/project-images';
import { ProjectTile } from '../ProjectTile';

const crochetProjects = [
  {
    title: "scarf (1st project!)",
    date: "January 31, 2024",
    materials: "acrylic yarn",
    image: crochetScarf1,
    alt: "a skinny crochet scarf using colors of mustard, burnt orange, burgundy, and cream."
  },
];

function SewingFiberArts() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1>sewing</h1>
            <p>--------------- project gallery goes here ---------------</p>
            <br/><br/><br/>
            <h1>crochet</h1>
            <div className="projectGallery">
              {crochetProjects.map((proj, index) => (
                <ProjectTile key={index} project={proj} />
              ))}
            </div>
            <br/><br/><br/>
            <h1>embroidery</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default SewingFiberArts;
