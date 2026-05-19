import NoteCard from './NoteCard'

const NotesList = ({notes}) => {
  return (
    <section className='notes-list'>
        {notes.map(note => ( //for each note in notes array, return a NoteCard component with the note as a prop
            <NoteCard key={note.id} note={note} />
        ))}
    </section>
  )
}

export default NotesList