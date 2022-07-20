import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ColorBox from './components/ColorBox';
import NewsPage from './pages/NewsPage';

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
    <div>
      <ColorBox />
    </div>
  )
}

export default App;