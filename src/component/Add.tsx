import React, { useState } from 'react';
import styles from "./list.module.scss";
import { IState as Props } from "../App";

interface IProps {
  peopleData: Props['people'];
  setPeopleData: React.Dispatch<React.SetStateAction<Props['people']>>
}

const Add: React.FC<IProps> = ({ peopleData, setPeopleData }) => {

  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    country: ''
  })

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked)
  }

  const handleClick = (): void => {
    if (
      !input.name ||
      !input.age ||
      !input.country
    ) {
      return;
    }

    setPeopleData([
      ...peopleData,
      {
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
        country: input.country,
        terms: isChecked,
      }
    ])

    setInput({
      name: '',
      age: '',
      note: '',
      country: ''
    })

    setIsChecked(false);
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

      <li>
        <select
          className={styles.inputField}
          value={input.country}
          onChange={handleChange}
          name="country"
        >
          <option value="Country">Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="United States">United States</option>
          <option value="England">England</option>
          <option value="Japan">Japan</option>
          <option value="Russia">Russia</option>
        </select>
      </li>

      <li>
        <h4>Terms &amp; conditions</h4>
        <label>
          I agree
          <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        </label>
      </li>

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
