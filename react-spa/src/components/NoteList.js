import React, {useState } from 'react'
import '../styleSheets/NoteList.css'
import { NoteForm } from './NoteForm'
import TextCard from './TextCard'
import { cargarMilanesa } from './handler'
import {ArchivesTable} from './ArchivesTable.js'

export const NoteList = ()=> {
    const [notes, setNotes] = useState([])


    
    const addNote= note =>{
        note.title = note.title.trim() ? note.title.trim() : note.title;
        const updatedNotes = [note, ...notes];
        setNotes(updatedNotes);

    }
        {if(window.location.pathname !== "/ArchivedListing"){
            return (
                <>  <NoteForm onSubmit={addNote} />
                        {
                            notes.map((note)=>
                                <TextCard
                                    key={note.id}
                                    id={note.id}
                                    title ={note.title}
                                    description = {note.description}
                                    archived = {note.archived}
                                />
                            )
                        }
                    {/* </div> */}
                </>
            )
        }else{
            return(
                <div className='pos-for-listing'>
                    <ArchivesTable/>
                </div>
            )
        }
    }
}

