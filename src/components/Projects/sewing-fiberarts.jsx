import { ProjNavbar, ProjFooter } from './ProjNavFooter';
import { crochetScarf1, tsunoBag } from '../../assets/images/project-images/project-images';
import { ProjectTile } from './ProjectTile';

const fiberArtsProjects = [
  {
    title: "tsuno bag",
    date: "March 2024",
    materials: "cotton canvas fabric, polyester thread",
    image: tsunoBag,
    alt: "green tsuno bag"
  },
  {
    title: "scarf (1st project!)",
    date: "January 2024",
    materials: "acrylic yarn",
    image: crochetScarf1,
    alt: "skinny crochet scarf using colors of mustard, burnt orange, burgundy, and cream."
  },
]

function SewingFiberArts() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1 className="projectPageTitle">sewing • crochet • embroidery</h1>
            <div className="projectGallery">
              {fiberArtsProjects.map((proj, index) => (
                  <ProjectTile key={index} project={proj} />
                ))}
            </div>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default SewingFiberArts;
