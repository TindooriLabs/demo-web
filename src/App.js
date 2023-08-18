import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Figma from './pages/Figma';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import Mission from './pages/Mission';
import Future from './pages/Future';

function App() {


  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/figma' element={<Figma />} />
            <Route path='/mission' element={<Mission />} />
            <Route path='/future' element={<Future />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>

    </>

  );
}

export default App;
