import './projects.css';

export function ProjNavbar() {
  return (
    <nav>
      <a className="proj-nav-link" href="/">
          <div className="proj-nav-circle">
            <h1 id="proj-nav-title">back to home</h1>
          </div>
      </a>
    </nav>
  );
}

export function ProjFooter() {
  return (
    <footer className="proj-footer">
      <ul className="proj-footer-list">
        <li>
          <a href="/websites-coding">websites • coding</a>
        </li>
        
        <li>
          <a href="/uiux-graphicdesign">ui/ux • graphic design</a>
        </li>
        
        <li>
          <a href="/sewing-fiberarts">sewing • fiber arts</a>
        </li>
        
        <li>
          <a href="/photography-filmmaking">photography • filmmaking</a>
        </li>
        
        <li>
          <a href="/collages-printmaking">collages • printmaking</a>
        </li>
      </ul>
    </footer>
  );
};
