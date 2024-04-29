import React from 'react'

const Form = () => {
  return (
    <section className="expanded-card__section expanded-card__section--form">
    <h3 className="expanded-card__oneonone--title">1-on-1's</h3>
    <form className="expanded-card__form">
      <div className="expanded-card__form-group">
        <label htmlFor="commenterName">Commenter Name: </label>
        <input type="text" id="commenterName" name="commenterName" />
      </div>
      <div className="expanded-card__form-group">
        <label htmlFor="commentText">Comment:</label>
        <textarea id="commentText" name="commentText"></textarea>
      </div>
      <button type="submit">Add Note</button>
    </form>
  </section>
  )
}

export default Form