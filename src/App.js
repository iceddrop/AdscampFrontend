import {Routes, Route} from 'react-router-dom'
import './App.css';
import Campaign from './pages/campaign/Campaign';
import Home from './pages/home/Home';




function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="Campaign" element={<Campaign/>}/>
    </Routes>
    </>

  );
}

export default App;
