import React from 'react'
import './classescontainer.scss';

const ClassYear = ({value, setYear, setCurrentData, studentData }) => {
  

  const changeStudentSection = () => { 
    setYear(value);
    updateData();
  }
  const updateData = () => { 
    const newVal  = value.split(' ').join('');
    const newData = studentData.filter(info => info.cohort.cohortCode === newVal);
    setCurrentData(newData);
    
  }

  return (
    <div onClick={changeStudentSection} className="classes-container__class-year" >{value}</div>
  )
}

export default ClassYear