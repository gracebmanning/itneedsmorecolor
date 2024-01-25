import './sewing-fiberarts.css';
import ProjNavbar from '../ProjNavbar';
import ProjFooter from '../ProjFooter';

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
