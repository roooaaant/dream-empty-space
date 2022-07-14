import React, {useState, useCallback} from 'react';
import NewsList from './components/NewsList'
import Categories from './components/Categories';
//import axios from 'axios';

/*
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d46e450eac8f4fefbcf58fc0d9cfdb6e',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea row={7} defaultValue={JSON.stringify(data, null, 2)} />}
    </div>
  );
}
 */
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
    <Categories category={category} onSelect={onSelect} />
    <NewsList category={category} />
    </>
  );
};

export default App;