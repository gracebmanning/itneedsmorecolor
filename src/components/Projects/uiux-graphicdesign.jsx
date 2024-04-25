import { ProjNavbar, ProjFooter } from './ProjNavFooter';

function UIUXGraphicDesign() {
  return (
    <div className="page-container">
        <ProjNavbar/>
        <div className="page-content">
            <h1 className="projectPageTitle">UI/UX design • graphic design</h1>
            <p>--------------- project gallery goes here ---------------</p>
        </div>
        <ProjFooter/>
    </div>
  );
}

export default UIUXGraphicDesign;
