import './App.css'
import NotesList from './components/NotesList'
import { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'

function App() {
  const [editingNote, setEditingNote] = useState(null)
  const [notes, setNotes] = useState([
   {
     id: 1,
     title: 'First Note',
     content: 'This is the content of the first note.'
   },
   {
     id: 2,
     title: 'Second Note',
     content: 'This is the content of the second note.'
   },  
   {
     id: 3,
     title: 'Third Note',
     content: 'This is the content of the third note.'
   }
  ]) 
function handleEditNote(note){
  setEditingNote(note)
} 
function handleDeleteNote(id){
  setNotes(notes.filter((note)=>note.id !==id))
}
function handleAddNote(noteData){
  const newNote={
    id: Date.now(),
    title:noteData.title,
    content:noteData.content
  }
  setNotes([...notes, newNote])
}
  return (
       <main className='app'>
       <h1>My Notes App</h1>
        <NoteForm onAddNote={handleAddNote} editingNote={editingNote}  key={editingNote ? editingNote.id : 'new-note'} />
        {editingNote && <p>Editing: {editingNote.title}</p>}
        <NotesList notes={notes} onDeleteNote={handleDeleteNote} onEditNote={handleEditNote} />
          <button type="button" onClick={()=> setNotes([])}>
            clear notes
        </button>
       </main>
  )
}

export default App
