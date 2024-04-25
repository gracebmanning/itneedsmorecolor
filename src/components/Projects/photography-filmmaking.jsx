import { ProjNavbar, ProjFooter } from './ProjNavFooter';

function PhotographyFilmmaking() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1 className="projectPageTitle">photography • filmmaking</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default PhotographyFilmmaking;
