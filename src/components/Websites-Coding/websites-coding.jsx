import './websites-coding.css';
import { ProjNavbar, ProjFooter } from '../ProjNavFooter';

function WebsitesCoding() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1>websites</h1>
            <p>--------------- project gallery goes here ---------------</p>
            <br/><br/><br/>
            <h1>other coding projects</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default WebsitesCoding;
