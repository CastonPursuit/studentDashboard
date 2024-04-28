import React from 'react'
import StudentCard from './StudentCard'
import './student_profile_container.scss'
import studentData from '../../data/data.json'

const StudentProfileContainer = () => {
  const studentCount = studentData.length;

  return ( 
  <section className="container"> 
    <header className="container__header"> 
      <h1 className="container__title">All Students</h1>
      <h1 className="container__count">Total Students: <span className='container__number'> {studentCount} </span> </h1>
    </header>
    <ul className="container__student-list">
      {studentData.map(student => (<li className="container__student-item"><StudentCard student={student}/></li> ))} 
    </ul>
  </section>
  )
}

export default StudentProfileContainer