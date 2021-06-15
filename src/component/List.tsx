import React from 'react';
import styles from "./list.module.scss";
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
          <p><strong>Country</strong>: {person.country}</p>
          <p><strong>Terms</strong>: {person.terms ? 'Agree' : 'Don\'t agree'}</p>
          {person.note && <p><em><strong>Note</strong>: {person.note}</em></p>}
        </li>
      )
    })
  }

  return (
    <>
      {people.length > 0 ?
        <ul className={styles.list}>
          {renderList()}
        </ul>
        :
        <p className={styles.listEmpty}>The list is empty. Please add people</p>
      }
    </>
  )
}

export default List;
