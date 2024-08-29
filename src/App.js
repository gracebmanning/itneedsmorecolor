import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ProjectsGallery from './components/Projects/projectsGallery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/projects-gallery" element={<ProjectsGallery/>} />
      </Routes>
    </div>
  );
}

export default App;
