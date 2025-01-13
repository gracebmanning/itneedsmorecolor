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
        
        <li><a className="proj-list-link" href="/projects-gallery">sample project page</a></li>
      </ul>
    </div>
  )
}

export function AboutCircle(){
  return(
    <div className="circle" id="about-circle">
      <h1>about me</h1>
      <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales rutrum dignissim. Etiam enim velit, dapibus non tortor vel, eleifend sollicitudin nibh. Nunc fringilla imperdiet erat nec finibus. Maecenas mattis commodo arcu, quis ultricies magna dapibus eget. Vestibulum euismod lobortis vulputate.<br/><br/>Mauris commodo leo in ante laoreet tincidunt. Morbi sed lobortis nulla, luctus posuere nulla. Cras a est aliquet leo finibus pretium. Maecenas posuere mi ac velit pellentesque molestie. Maecenas eget dapibus erat.</p>
    </div>
  );
}

export function ContactCircle(){
  return(
    <div className="circle" id="contact-circle">
      <h1>contact</h1>
      <p id="contact-text">contact me at [email address] or find me on social media at [username]!</p>
    </div>
  );
}