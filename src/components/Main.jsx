import '../App.css';
import globe from '../assets/icons/entire_network_globe-0.png';
import book from '../assets/icons/address_book-0.png';
import folder from '../assets/icons/directory_favorites-2.png';
import search from '../assets/icons/search_directory-0.png';
import { HomeCircle, ProjectCircle, AboutCircle, ContactCircle } from './Circles/circle';

let currentCircle = 'home-circle';
function switchCircles(id){
  let elem = document.getElementById(currentCircle);
  if(id === 'home-circle'){
    elem.innerHTML = HomeCircle;
  } else if(id === 'proj-circle'){
    elem.innerHTML = ProjectCircle;
  } else if(id === 'contact-circle'){
    elem.innerHTML = ContactCircle;
  } else{
    elem.innerHTML = AboutCircle;
  }
  elem.id = id;
  currentCircle = id;
}

function Main() {
  return (
    <div className="main">
      <div className="content">
        <div className="circle" id="home-circle">
          <h1 id="title">itneedsmorecolor.com</h1>
        </div>
        <nav className="nav-buttons">
            <div className="nav-button" id="home-icon" onClick={() => switchCircles('home-circle')}>
              <img className="nav-icon" src={globe} alt="Windows 98 folder icon with blue asterisk on it." />
              <p className="nav-text">home</p>
            </div>
            <div className="nav-button" id="proj-icon" onClick={() => switchCircles('proj-circle')}>
              <img className="nav-icon" src={folder} alt="Windows 98 folder icon with blue asterisk on it." />
              <p className="nav-text">projects</p>
            </div>
            <div className="nav-button" id="about-icon" onClick={() => switchCircles('about-circle')}>
              <img className="nav-icon" src={search} alt="Windows 98 folder icon with magnifying glass over it." />
              <p className="nav-text">about</p>
            </div>
            <div className="nav-button" id="contact-icon" onClick={() => switchCircles('contact-circle')}>
              <img className="nav-icon" src={book} alt="Windows 98 icon of an address book." />
              <p className="nav-text">contact</p>
            </div>
        </nav>
      </div>
      <footer>
          <p className="footer-text">
            center image is fabric from <a href="https://schumacher.com/catalog/products/180131" target="_blank" rel="noreferrer">Schumacher</a>. 
            Windows 98 icons from <a href="https://alexmeub.com/projects/windows-98-icons/" target="_blank" rel="noreferrer">Alex Meub</a>.
          </p>
        </footer>
    </div>
  );
}

export default Main;
