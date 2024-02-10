import './sewing-fiberarts.css';
import { ProjNavbar, ProjFooter } from '../ProjNavFooter';
import { crochetScarf1 } from '../../assets/images/project-images/project-images';

const projects = [
  {
    title: "scarf (1st project!)",
    completedDate: "January 31, 2024",
    materials: "acrylic yarn",
    image: crochetScarf1
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
            <p>--------------- project gallery goes here ---------------</p>
            <br/><br/><br/>
            <h1>embroidery</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default SewingFiberArts;
