import React, { useState } from 'react';
import List from './component/List';
import Add from './component/Add';

export interface IState {
  people: {
    // id: number;
    name: string;
    age: number;
    // married: boolean;
    note?: string;
  }[]
}

function App() {
  const [peopleData, setPeopleData] = useState<IState['people']>([
    {
      // id: 1,
      name: 'Mamun',
      age: 30,
      // married: true,
      note: 'He\'s trust worthy'
    },

    {
      // id: 2,
      name: 'Michael Jackson',
      age: 50,
      // married: false,
      note: 'He\'s a great dancer'
    }
  ])  

  return (
    <div className="container">
      <h1 className="title">List of people</h1>
      <List people={peopleData} />
      <Add peopleData={peopleData} setPeopleData={setPeopleData} />
    </div>
  );
}

export default App;
