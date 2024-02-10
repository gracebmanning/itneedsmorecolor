import '../App.css';
import globe from '../assets/icons/entire_network_globe-0.png';
import book from '../assets/icons/address_book-0.png';
import folder from '../assets/icons/directory_favorites-2.png';
import search from '../assets/icons/search_directory-0.png';
import { HomeCircle, ProjectCircle, AboutCircle, ContactCircle } from './circle';

function show(){
  for(let a of arguments){
    let elem = document.getElementById(a);
    elem.style.visibility = "visible";
  }
}

function hide(){
  for(let a of arguments){
    let elem = document.getElementById(a);
    elem.style.visibility = "hidden";
  }
}

function toggleCircles(id){
  let elem = document.getElementById(id);
  if(id === "proj-circle"){
    console.log(elem.style.visibility);
    if(elem.style.visibility === "hidden"){
      show("proj-circle");
      hide("title", "about-circle", "contact-circle");
    } else{
      hide("proj-circle");
      show("title");
    }
  } else if(id === "about-circle"){
    if(elem.style.visibility === "hidden"){
      show("about-circle");
      hide("title", "proj-circle", "contact-circle");
    } else{
      hide("about-circle");
      show("title");
    }
  } else if(id === "contact-circle"){
    if(elem.style.visibility === "hidden"){
      show("contact-circle");
      hide("title", "proj-circle", "about-circle");
    } else{
      hide("contact-circle");
      show("title");
    }
  } else{
    show("title");
    hide("proj-circle", "about-circle", "contact-circle");
  }
}

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
        <div className="nav-buttons">
            <div className="nav-button" id="home-icon" onClick={switchCircles}>
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
            center image is fabric from <a href="https://schumacher.com/catalog/products/180131" target="_blank" rel="noreferrer">Schumacher</a>. 
            Windows 98 icons from <a href="https://alexmeub.com/projects/windows-98-icons/" target="_blank" rel="noreferrer">Alex Meub</a>.
          </p>
        </footer>
    </div>
  );
}

export default Main;
