import React from 'react';
import styles from "./chat.module.scss";
import { IState as IProps } from "../App";

// const List = (props: IProps) => {
// const List = ({people}: IProps) => {
const List: React.FC<IProps> = ({people}) => { // Both the lines above are valid and work well

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li key={index}>
          <p><strong>Name</strong>: {person.name}</p>
          <p><strong>Age</strong>: {person.age}</p>
          {/* <div>{person.married ? 'Married' : 'Single'}</div> */}
          <p><strong><em>Note</em></strong>: {person.note}</p>
        </li>
      )
    })
  }

  return (
    <ul className={styles.list}>
      {renderList()}
    </ul>
  )
}

export default List;
