import React from 'react'
import '../styleSheets/TextCard.css';

export const TextCard =({id,title,description,archived,archiveNote})=> {
  return (
    <div className='text-card'>
        <div className='column-list'>
          <h1>
            {title}
          </h1>
          <p>
            {description}
          </p>
        </div>
          <div onClick={()=> archiveNote(id)}>
            <button className='text-card-button'>
              Archive Note!
            </button>
          </div>
        
    </div>
  )
};

export default TextCard;