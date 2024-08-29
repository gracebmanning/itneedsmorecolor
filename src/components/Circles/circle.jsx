import './circles.css';

export function HomeCircle(){
  return(
    <div className="circle" id="home-circle">
      <h1 id="title">itneedsmorecolor.com</h1>
    </div>
  );
}


// USE FOR BIG PROJECTS
//<li><a className="proj-list-link" href="/">June 2024 - project name</a></li>
//<li><a className="proj-list-link" href="/">July 2024 - project name</a></li>
export function ProjectCircle(){
  return(
    <div className="circle" id="project-circle">
      <h1>projects</h1>
      <ul id="projects-list">
        
        <li><a className="proj-list-link" href="/projects-gallery">experimenting / other projects</a></li>
      </ul>
    </div>
  )
}

export function AboutCircle(){
  return(
    <div className="circle" id="about-circle">
      <h1>about me</h1>
      <p id="about-text">this website is unfinished!!</p>
    </div>
  );
}

export function ContactCircle(){
  return(
    <div className="circle" id="contact-circle">
      <h1>contact</h1>
      <p id="contact-text">want to work together or commission work from me? contact me via email at grace@itneedsmorecolor.com</p>
    </div>
  );
}