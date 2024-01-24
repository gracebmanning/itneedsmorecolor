import '../App.css';
import book from '../assets/icons/address_book-0.png';
import folder from '../assets/icons/directory_favorites-2.png';
import search from '../assets/icons/search_directory-0.png';

function Main() {
  function toggleAbout(){
    let elem = document.getElementById("about-circle");
    if(elem.style.display === "flex"){
      elem.style.display = "none"
    }
    else{
      elem.style.display = "flex";
    }
  }
  return (
    <div className="main">
      <div className="content">
        <div id="home-circle">
            <h1 className="title">itneedsmorecolor.com</h1>
        </div>
        <div id="about-circle">
          <p>About. <a href="google.com">Link doesn't work :(</a></p>
        </div>
        <div className="nav-buttons">
            <div className="nav-button" id="proj-icon">
              <img className="nav-icon" src={folder} alt="Windows 98 folder icon with blue asterisk on it." />
              <p className="nav-text">projects</p>
            </div>
            <div className="nav-button" id="about-icon" onClick={toggleAbout}>
              <img className="nav-icon" src={search} alt="Windows 98 folder icon with magnifying glass over it." />
              <p className="nav-text">about</p>
            </div>
            <div className="nav-button" id="contact-icon">
              <img className="nav-icon" src={book} alt="Windows 98 icon of an address book." />
              <p className="nav-text">contact</p>
            </div>
        </div>
      </div>
      <footer>
          <p>
            center image is a <a href="https://schumacher.com/catalog/products/180131" target="_blank" rel="noreferrer">fabric from Schumacher</a>. 
            Windows 98 icons sourced from <a href="https://alexmeub.com/projects/windows-98-icons/" target="_blank" rel="noreferrer">Alex Meub</a>.
          </p>
        </footer>
    </div>
  );
}

export default Main;
