import React, { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState({commenter:"", comment: "" });
  const [commenters, setCommenters] = useState([]);
 

  const handleChange = (e) => {   
    const {name, value} = e.target;
    setValue(prevState => ({...prevState, [name] : value}) )
    
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setCommenters(prev => [...prev, {name: value.commenter, value: value.comment}]);
    console.log(commenters);
    
  }


  return (
    <section className="expanded-card__section expanded-card__section--form">
    <h3 className="expanded-card__oneonone--title">1-on-1's</h3>
    <form className="expanded-card__form" onSubmit={handleSubmit}>
      <div className="expanded-card__form-group">
        <label htmlFor="commenterName">Commenter Name: </label>
        <input 
          type="text" 
          name="commenter" 
          value={value.commenter}
          onChange={handleChange}
          />
      </div>
      <div className="expanded-card__form-group">
        <label htmlFor="commentText">Comment:</label>
        <textarea 
          id="comment" 
          name="comment"
          value={value.comment}
          onChange={handleChange}
          >
        </textarea>
      </div>
      <button type="submit">Add Note</button>
    </form>

    <ul className='comment-list'>
      {commenters.map(commenter => <li> { `${commenter.name} says, ${commenter.value}`} </li>)}
    </ul>
  </section>
  

  )
}

export default Form

