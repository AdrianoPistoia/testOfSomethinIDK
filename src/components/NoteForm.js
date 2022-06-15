import React, { useState } from 'react'
import '../styleSheets/NoteForm.css'
import {v4 as uuidv4} from 'uuid';
export const NoteForm=(props)=> {
  
    const [titleinput, setTitleInput] = useState("");
    const [descinput,setDescInput] = useState("");

    const handleTitleOnChange= e =>{ setTitleInput(e.target.value) }
    const handleDescOnChange= e =>{ setDescInput(e.target.value) }
    const handleOnSubmit = e =>{
        e.preventDefault();

        const newNote  = {
            id:uuidv4(),
            title: titleinput,
            description: descinput,
            archived:"false"
        }
        
        props.onSubmit(newNote);
    }
    return (
    <form className='noteForm' action=""
        >
        <input id='title'
            className='noteInput'
            type="text" 
            placeholder='Write down your note!'
            name='text'
            onChange={handleTitleOnChange}/>
        <input id='desc'
            className='noteInput desc'
            type="text" 
            placeholder='Add a descritpion to you note'
            name='description'
            onChange={handleDescOnChange}/>
        <button className='noteButton'
        onClick={handleOnSubmit}>
            Add Note
        </button>
    </form>
  )
}
