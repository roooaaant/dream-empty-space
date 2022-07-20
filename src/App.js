import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import ColorBox from './components/ColorBox';
//import NewsPage from './pages/NewsPage';
import ColorContext from './contexts/color';

/*
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};
*/

const App = () => {
  return (
    <ColorContext.Provider value={{ color:'red' }}>
    <div>
      <ColorBox />
    </div>
    </ColorContext.Provider>
  )
}

export default App;