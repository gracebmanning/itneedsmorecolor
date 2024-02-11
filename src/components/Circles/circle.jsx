import './circles.css';

export function HomeCircle(){
  return(
    <div className="circle" id="home-circle">
      <h1 id="title">itneedsmorecolor.com</h1>
    </div>
  );
}

export function ProjectCircle(){
  return(
    <div className="circle" id="project-circle">
      <h1>projects</h1>
      <ul id="projects-list">
        <li>
          <a className="proj-list-link" href="/websites-coding">websites • coding</a>
        </li>
        <li>
          <a className="proj-list-link" href="/uiux-graphicdesign">ui/ux • graphic design</a>
        </li>
        <li>
          <a className="proj-list-link" href="/sewing-fiberarts">sewing • fiber arts</a>
        </li>
        <li>
          <a className="proj-list-link" href="/photography-filmmaking">photography • filmmaking</a>
        </li>
        <li>
          <a className="proj-list-link" href="/collages-printmaking">collages • printmaking</a>
        </li>
      </ul>
    </div>
  )
}

export function AboutCircle(){
  return(
    <div className="circle" id="about-circle">
      <h1>about me</h1>
      <p id="about-text">I'm Grace and I make things! It's my favorite thing to do.</p>
    </div>
  );
}

export function ContactCircle(){
  return(
    <div className="circle" id="contact-circle">
      <h1>contact</h1>
      <p id="contact-text">want to work together or commission work from me? contact me via email at gracebmanning@gmail.com</p>
    </div>
  );
}