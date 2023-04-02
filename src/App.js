import {Routes, Route} from 'react-router-dom'
import './App.css';
import Campaign from './pages/campaign/Campaign';
import Tables  from './pages/Tables/Tables';
import Home from './pages/home/Home';
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup';

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="Campaign" element={<Campaign/>}/>
       <Route path='Tables' element={<Tables/>}/>
       <Route path='login' element={<Login/>}/> 
       <Route path='signup' element={<Signup/>}/>
    </Routes>
    </>

  );
}

export default App;
