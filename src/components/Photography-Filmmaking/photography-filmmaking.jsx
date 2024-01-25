import './photography-filmmaking.css';
import ProjNavbar from '../ProjNavbar';
import ProjFooter from '../ProjFooter';

function PhotographyFilmmaking() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1>photography</h1>
            <p>--------------- project gallery goes here ---------------</p>
            <br/><br/><br/>
            <h1>filmmaking</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default PhotographyFilmmaking;
