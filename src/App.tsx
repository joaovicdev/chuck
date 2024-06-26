import React, { useState } from 'react';
import axios from 'axios';
import { RandomButton, ListFacts } from './components';

const App: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);

  const getData = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');

    setFacts([...facts, response.data.value]);
  };

  return (
    <div className="flex flex-col items-center">
      <RandomButton onClick={getData} />
      <ListFacts facts={facts} />
    </div>
  );
}

export { App };
