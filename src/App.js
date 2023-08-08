import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom';
import Figma from './pages/Figma';
import Home from './pages/Home';

function App() {

  /**
   const navigate = useNavigate();
  const showFigma = () => {
    let path = '/figma';
    navigate(path);
  }
  const goHome = () => {
    let path = '/';
    navigate(path);
  }
 
   */

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout />} /> */}
          <Route path='/' index element={<Home />} />
          <Route path='/figma' element={<Figma />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
