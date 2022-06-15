import React from 'react'
import {cargarMilanesa} from './handler.js'
export  const ArchivesTable = (props)=> {
    var a = cargarMilanesa();
    
  return (
    <div>
        <table className="table table-dark table-striped">
        <thead>
            
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">creation</th>
            </tr>
        </thead>
        <tbody id="body">
            {
                // a.Array.forEach(mila=>(
                //     <>
                //         <tr>
                //         <th scope="row">{mila.id}a</th>
                //         <td>{mila.title}b</td>
                //         <td>{mila.createdAt}c</td>
                //         {/* </tr>
                //         <tr>
                //         <td colSpan={3}>{mila.description}Administrator entry for default value on description column for Notes</td>
                //          */}
                //          </tr>
                //     </>
                // ))
            }
            
        </tbody>
        </table>
    </div>
  )
}

