import React from 'react'
import StudentCard from './StudentCard'
import './student_profile_container.scss'


const StudentProfileContainer = ({studentData}) => {
  return ( 
  <section className="container"> 
    <header className="container__header"> 
      <h1 className="container__title">All Students</h1>
      <h1 className="container__count">Total Students: <span className='container__number'> {studentData.length} </span> </h1>
    </header>
    <ul className="container__student-list">
      {studentData.map(student => (<li key={student.id} className="container__student-item"><StudentCard  student={student} /></li> ))} 
    </ul>
  </section>
  )
}

export default StudentProfileContainer