import '../App.css';
import globe from '../assets/icons/entire_network_globe-0.png';
import book from '../assets/icons/address_book-0.png';
import folder from '../assets/icons/directory_favorites-2.png';
import search from '../assets/icons/search_directory-0.png';

function Main() {
  function toggleCircles(id){
    let proj = document.getElementById("proj-circle");
    let about = document.getElementById("about-circle");
    let contact = document.getElementById("contact-circle");
    if(id === "proj-circle"){
      proj.style.visibility === "hidden" ? proj.style.visibility = "visible" : proj.style.visibility = "hidden";
      about.style.visibility = "hidden";
      contact.style.visibility = "hidden";
    } else if(id === "about-circle"){
      about.style.visibility === "hidden" ? about.style.visibility = "visible" : about.style.visibility = "hidden";
      proj.style.visibility = "hidden";
      contact.style.visibility = "hidden";
    } else if(id === "contact-circle"){
      contact.style.visibility === "hidden" ? contact.style.visibility = "visible" : contact.style.visibility = "hidden";
      about.style.visibility = "hidden";
      proj.style.visibility = "hidden";
    } else{
      contact.style.visibility = "hidden";
      about.style.visibility = "hidden";
      proj.style.visibility = "hidden";
    }
  }
  
  return (
    <div className="main">
      <div className="content">
        <div className="circle" id="home-circle">
            <h1 className="title">itneedsmorecolor.com</h1>
        </div>
        <div className="circle" id="proj-circle">
          <p>Projects</p>
        </div>
        <div className="circle" id="about-circle">
          <p>About Me!</p>
        </div>
        <div className="circle" id="contact-circle">
          <p>Contact</p>
        </div>
        <div className="nav-buttons">
            <div className="nav-button" id="home-icon" onClick={() => toggleCircles('home-circle')}>
              <img className="nav-icon" src={globe} alt="Windows 98 folder icon with blue asterisk on it." />
              <p className="nav-text">home</p>
            </div>
            <div className="nav-button" id="proj-icon" onClick={() => toggleCircles('proj-circle')}>
              <img className="nav-icon" src={folder} alt="Windows 98 folder icon with blue asterisk on it." />
              <p className="nav-text">projects</p>
            </div>
            <div className="nav-button" id="about-icon" onClick={() => toggleCircles('about-circle')}>
              <img className="nav-icon" src={search} alt="Windows 98 folder icon with magnifying glass over it." />
              <p className="nav-text">about</p>
            </div>
            <div className="nav-button" id="contact-icon" onClick={() => toggleCircles('contact-circle')}>
              <img className="nav-icon" src={book} alt="Windows 98 icon of an address book." />
              <p className="nav-text">contact</p>
            </div>
        </div>
      </div>
      <footer>
          <p className="footer-text">
            center image is a <a href="https://schumacher.com/catalog/products/180131" target="_blank" rel="noreferrer">fabric from Schumacher</a>. 
            Windows 98 icons from <a href="https://alexmeub.com/projects/windows-98-icons/" target="_blank" rel="noreferrer">Alex Meub</a>.
          </p>
        </footer>
    </div>
  );
}

export default Main;
