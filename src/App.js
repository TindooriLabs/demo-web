import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Figma from './pages/Figma';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';

function App() {


  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode='wait'>
          <Routes>
            {/* <Route path='/' element={<Layout />} /> */}
            <Route path='/' index element={<Home />} />
            <Route path='/figma' element={<Figma />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>

  );
}

export default App;
