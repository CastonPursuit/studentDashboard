import React from 'react';
import './student_card.scss';
import studentData from '../../data/data.json'

const StudentCard = () => {
  const {username, dob, profilePhoto } = studentData[0];
  const  {preferredName, surname, middleName} = studentData[0].names
  return (
  <div className='student-card'>
    <img className='student-card__image' src={profilePhoto} alt='Student Profile' />
    <div className='student-card__info'>
      <div className='student-card__details'>
        <h4 className='student-card__name'>{`${preferredName} ${middleName.slice(0,1)}. ${surname}`}</h4>
        <p className='student-card__username'>{username}</p>
        <p className='student-card__dob'>{`Birthday: ${dob}`}</p>
      </div>
      <button className='student-card__button'>Show More...</button>
    </div>
  </div>
  )
}

export default StudentCard