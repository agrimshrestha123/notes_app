import NoteCard from './NoteCard'

const NotesList = ({notes, onDeleteNote, onEditNote}) => {
  if(notes.length === 0){
    return <p className='empty-state'>No notes yet. Add a note to get started!</p>
  }
  return (
    <section className='notes-list'>
        {notes.map(note => ( //for each note in notes array, return a NoteCard component with the note as a prop
            <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} onEditNote={onEditNote} />
        ))}
    </section>
  )
}

export default NotesList