import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import ColorBox from './components/ColorBox';
//import NewsPage from './pages/NewsPage';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

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
    <ColorProvider>
    <div>
        <SelectColors />
        <ColorBox />
    </div>
    </ColorProvider>
  )
}

export default App;
