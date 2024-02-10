import { ProjNavbar, ProjFooter } from '../ProjNavFooter';

function CollagesPrintmaking() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1>collages</h1>
            <p>--------------- project gallery goes here ---------------</p>
            <br/><br/><br/>
            <h1>printmaking</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default CollagesPrintmaking;
