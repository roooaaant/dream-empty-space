import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import ColorBox from './components/ColorBox';
//import NewsPage from './pages/NewsPage';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
import Counter from './components/Counter'
import Todos from './components/Todos';

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

/* [15]
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
 */

// 17
const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr/>
      <Todos />
    </div>
  )
}


export default App;
