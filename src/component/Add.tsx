import React, { useState } from 'react';
import styles from "./chat.module.scss";
import { IState as Props } from "../App";

interface IProps {
  peopleData: Props['people'];
  setPeopleData: React.Dispatch<React.SetStateAction<Props['people']>>
}

const Add: React.FC<IProps> = ({ peopleData, setPeopleData }) => {

  const [input, setInput] = useState({
    name: '',
    age: '',
    // mStatus: '',
    note: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleClick = (): void => {
    if (
      !input.name ||
      !input.age ||
      !input.note
    ) {
      return;
    }

    setPeopleData([
      ...peopleData,
      {
        name: input.name,
        age: parseInt(input.age),
        note: input.note
      }
    ])

    setInput({
      name: '',
      age: '',
      // mStatus: '',
      note: ''
    })
  }

  return (
    <ul className={styles.add}>
      <li>
        <input 
          type="text" 
          placeholder="Name" 
          value={input.name} 
          className={styles.inputField}
          onChange={handleChange}
          name="name"
        />
      </li>

      <li>
        <input 
          type="number" 
          placeholder="Age" 
          value={input.age} 
          className={styles.inputField}
          onChange={handleChange}
          name="age"
        />
      </li>

      {/* <li>
        <select className={styles.inputField}>
          <option>Marital status</option>
          <option>Married</option>
          <option>Single</option>
        </select>
      </li> */}

      <li>
        <textarea 
          placeholder="Note" 
          value={input.note} 
          className={styles.inputField}
          onChange={handleChange}
          name="note"
        />
      </li>

      <li>
        <button type="button" onClick={handleClick} className={styles.button}>Add Person</button>
      </li>
    </ul>
  )
}

export default Add;
