import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import WebsitesCoding from './components/Projects/websites-coding';
import UIUXGraphicDesign from './components/Projects/uiux-graphicdesign';
import SewingFiberArts from './components/Projects/sewing-fiberarts';
import PhotographyFilmmaking from './components/Projects/photography-filmmaking';
import CollagesPrintmaking from './components/Projects/collages-printmaking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/websites-coding" element={<WebsitesCoding/>} />
        <Route path="/uiux-graphicdesign" element={<UIUXGraphicDesign/>} />
        <Route path="/sewing-fiberarts" element={<SewingFiberArts/>} />
        <Route path="/photography-filmmaking" element={<PhotographyFilmmaking/>} />
        <Route path="/collages-printmaking" element={<CollagesPrintmaking/>} />
      </Routes>
    </div>
  );
}

export default App;
