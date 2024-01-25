import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import WebsitesCoding from './components/Websites-Coding/websites-coding';
import UIUXGraphicDesign from './components/UIUX-GraphicDesign/uiux-graphicdesign';
import SewingFiberArts from './components/Sewing-FiberArts/sewing-fiberarts';
import PhotographyFilmmaking from './components/Photography-Filmmaking/photography-filmmaking';
import CollagesPrintmaking from './components/Collages-Printmaking/collages-printmaking';

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
