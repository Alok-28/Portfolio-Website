import React, { useContext } from 'react';
import { header,about,projects,skills,contact } from './portfolio';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './pages/Projects';
import SkillsPage from './pages/Skills';

const App = () => {

  return (
    <BrowserRouter>
      <div id='top' className={`dark app`}>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/skills' element={<SkillsPage/>}/>
          </Routes>
        </main>
        <Footer/>
        
     </div>
    </BrowserRouter>
  );
}

export default App;
