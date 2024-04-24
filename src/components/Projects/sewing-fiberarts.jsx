import { ProjNavbar, ProjFooter } from './ProjNavFooter';
import { crochetScarf1, tsunoBag } from '../../assets/images/project-images/project-images';
import { ProjectTile } from './ProjectTile';

const sewingProjects = [
  {
    title: "tsuno bag",
    date: "March 2024",
    materials: "cotton canvas fabric, polyester thread",
    image: tsunoBag,
    alt: "green tsuno bag"
  },
]
const crochetProjects = [
  {
    title: "scarf (1st project!)",
    date: "January 2024",
    materials: "acrylic yarn",
    image: crochetScarf1,
    alt: "skinny crochet scarf using colors of mustard, burnt orange, burgundy, and cream."
  },
];

function SewingFiberArts() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1>sewing</h1>
            <div className="projectGallery">
              {sewingProjects.map((proj, index) => (
                  <ProjectTile key={index} project={proj} />
                ))}
            </div>
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
