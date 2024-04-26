import React from 'react'
import StudentCard from './StudentCard'
import './student_profile_container.scss'
import studentData from '../../data/data.json'

const StudentProfileContainer = () => {
  const studentCount = studentData.length;
  return ( 
  <section class="container"> 
    <header class="container__header"> 
      <h1 class="container__title">All Students</h1>
      <h1 class="container__count">Total Students: <span className='container__number'> {studentCount} </span> </h1>
    </header>
    <ul class="container__student-list">
      <li class="container__student-item"><StudentCard/></li>
    </ul>
  </section>
  )
}

export default StudentProfileContainer