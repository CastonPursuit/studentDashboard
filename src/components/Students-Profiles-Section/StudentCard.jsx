import React, { useState } from 'react';
import './student_card.scss';
import ExpandedCard from './ExpandedCard';
import Form from './Form';

const StudentCard = ({student}) => {
  const {username, dob, profilePhoto, cohort, certifications, codewars } = student;
  const {preferredName, surname, middleName} = student.names
  const [isExpanded, setExpanded] = useState(false); 

  const expansionToggle = () => {
    setExpanded(value => !value);
  }
  return (
  <div className='student-card'>
    <img className='student-card__image' src={profilePhoto} alt='Student Profile' />
    <div className='student-card__info'>
      <div className='student-card__details'>
        <h4 className='student-card__name'>{`${preferredName} ${middleName.slice(0,1)}. ${surname}`}</h4>
        <p className='student-card__username'>{username}</p>
        <p className='student-card__dob'>{`Birthday: ${dob}`}</p>
      </div>

      <button onClick={expansionToggle} className='student-card__button'>{isExpanded ? 'Show less...': 'Show more...'}</button>
      {isExpanded &&
       ( 
       
       <> 
       <ExpandedCard

        assignments={cohort.scores.assignments}
        assessments={cohort.scores.assessments}
        projects={cohort.scores.projects}
        currentTotal={codewars.current.total}
        currentLastWeek={codewars.current.lastWeek}
        goalTotal={codewars.goal.total}
        resume={certifications.resume}
        linkedin={certifications.linkedin}
        github={certifications.github}
        mockInterview={certifications.mockInterview}
       />
       <Form/>
     </>
      )
       
       }
    </div>
  </div>
  )
}


export default StudentCard