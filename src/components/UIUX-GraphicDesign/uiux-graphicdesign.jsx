import './uiux-graphicdesign.css';
import ProjNavbar from '../ProjNavbar';
import ProjFooter from '../ProjFooter';

function UIUXGraphicDesign() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1>UI/UX design</h1>
            <p>--------------- project gallery goes here ---------------</p>
            <br/><br/><br/>
            <h1>graphic design</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default UIUXGraphicDesign;
