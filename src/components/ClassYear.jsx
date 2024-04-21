import React from 'react'
import './classescontainer.scss';

const ClassHeader = ({value}) => {
  return (
    <div className="classes-container__class-year" >{value}</div>
  )
}

export default ClassHeader