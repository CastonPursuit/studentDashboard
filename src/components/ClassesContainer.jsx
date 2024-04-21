import React from 'react'
import ClassYear from './ClassYear'
import './classescontainer.scss'
import studentData from '../data/data.json'
import { extractAndSortYearSeason } from '../utils/cohortYears'


const ClassesContainer = () => {
    const seasonYearsObj = extractAndSortYearSeason(studentData);



  return (
    <>
        <div className='classes-container'>
            <p className='classes-container__header'> Choose a class by start date</p>
        <ClassYear key={'1'} value={"All Students"}/>
        <ClassYear key={'2'} value={"All Students"}/>
        </div>
    </>
  )
}

export default ClassesContainer