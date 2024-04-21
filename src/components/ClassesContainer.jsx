import React from 'react'
import ClassYear from './ClassYear'
import './classescontainer.scss'
import studentData from '../data/data.json'
import { extractAndSortYearSeason } from '../utils/cohortYears'


const ClassesContainer = () => {
    const seasonYearsArr = extractAndSortYearSeason(studentData);
    const allClassYears = seasonYearsArr.map((seasonYear, indx) => { return <ClassYear value={seasonYear} key={indx} />   })

    console.log(seasonYearsArr);

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