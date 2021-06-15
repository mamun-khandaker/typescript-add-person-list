import React, { useState } from 'react';
import List from './component/List';
import Add from './component/Add';

export interface IState {
  people: {
    name: string;
    age: number;
    note?: string;
    country: string;
    terms: boolean;
  }[]
}

function App() {
  const [peopleData, setPeopleData] = useState<IState['people']>([]);

  return (
    <div className="container">
      <h1 className="title">List of people - {peopleData.length}</h1>
      <List people={peopleData} />
      <Add peopleData={peopleData} setPeopleData={setPeopleData} />
    </div>
  );
}

export default App;
