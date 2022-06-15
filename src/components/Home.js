import React from 'react';
import '../styleSheets/Home.css';
import  {NoteBody}  from './NoteBody.js';
import {NoteList } from './NoteList';


export const Home= 
(props)=>{
     console.log(props.noteNumber);
     let elem = <NoteBody title ={"card number "+props.noteNumber} text={"fuck me "+props.noteNumber+" time/s"}/> 
      //  for(let i=0;i<=props.noteNumber;i++){
      //     //  arr.
      //  };
      //  document.getElementById("notewall").appendChild(elem);
      const a =window.location.pathname === "/Notes"?<NoteList/>:null;
      const b =window.location.pathname === "/ArchivedListing"?<NoteList/>:null;
      return (
      <>
        <div id='notewall' className='content-body'>
          <div className='content-title-home'>
            <div className='title-div'>
              <h1>{props.title ? props.title : "Welcome to Task Manager"}</h1>
            </div>
          </div>
          <div className='space'></div>
          {a}{b}
        </div>
      </>
    );
}
  