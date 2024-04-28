import React from 'react'
import ClassYear from './ClassYear'
import './classescontainer.scss'
import { extractAndSortYearSeason } from '../../utils/cohortYears'


const ClassesContainer = ({studentData, setYear, setCurrentData}) => {
    const seasonYearsArr = extractAndSortYearSeason(studentData);
    const allClassYears = seasonYearsArr.map((seasonYear, indx) => { return <ClassYear value={seasonYear} setYear={setYear} setCurrentData={setCurrentData} studentData={studentData} key={indx}  />   })

  return (
    <>
        <div className='classes-container'>
            <p className='classes-container__header'> Choose a class by start date</p>
            {allClassYears}
        </div>
    </>
  )
}

export default ClassesContainer