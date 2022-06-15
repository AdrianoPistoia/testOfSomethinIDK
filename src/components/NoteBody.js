import React from 'react'
import TextCard from './TextCard';
import '../styleSheets/NoteBody.css'
// import {cargarMilanesa} from './handler';



export const  NoteBody= 
(props)=>{
  const defTitle =  "Go to your Wall!";
  const defText = "There you can create your own notes and manage them as you want!";
  return (
    <div className='content-body-note'>
        <TextCard 
          id = {props.id}
          archived = {props.archived}
          title = {props.title ? props.title : defTitle}
          text={props.text ? props.text : defText}/>
    </div>
  )
}


// text = {fetch(apiUrl).toString}