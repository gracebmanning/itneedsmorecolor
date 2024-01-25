import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import WebsitesCoding from './components/Websites-Coding/websites-coding';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/websites-coding" element={<WebsitesCoding/>} />
      </Routes>
    </div>
  );
}

export default App;
