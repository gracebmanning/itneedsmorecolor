import '../App.css';
import globe from '../assets/icons/entire_network_globe-0.png';
import book from '../assets/icons/address_book-0.png';
import folder from '../assets/icons/directory_favorites-2.png';
import search from '../assets/icons/search_directory-0.png';

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

function Main() {
  return (
    <div className="main">
      <div className="content">
        <div className="circle" id="home-circle">
            <h1 id="title">itneedsmorecolor.com</h1>
        </div>
        <div className="circle" id="proj-circle">
          <h1>projects</h1>
          <ul id="projects-list">
            <li>
              <a href="/websites-coding">websites • coding</a>
            </li>
            <li>
              <a href="">ui/ux • graphic design</a>
            </li>
            <li>
              <a href="">sewing • fiber arts</a>
            </li>
            <li>
              <a href="">photography • collages</a>
            </li>
            <li>
              <a href="">filmmaking</a>
            </li>
          </ul>
        </div>
        <div className="circle" id="about-circle">
          <h1>about me</h1>
          <p id="about-text">I'm Grace and I make things! It's my favorite thing to do.</p>
        </div>
        <div className="circle" id="contact-circle">
          <h1>contact</h1>
          <p id="contact-text">want to work together or commission work from me? contact me via email at gracebmanning@gmail.com</p>
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
            center image is a fabric from <a href="https://schumacher.com/catalog/products/180131" target="_blank" rel="noreferrer">Schumacher</a>. 
            Windows 98 icons from <a href="https://alexmeub.com/projects/windows-98-icons/" target="_blank" rel="noreferrer">Alex Meub</a>.
          </p>
        </footer>
    </div>
  );
}

export default Main;
