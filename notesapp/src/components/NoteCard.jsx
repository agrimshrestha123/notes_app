
const NoteCard = ({ note, onDeleteNote, onEditNote }) => {
  return (
    <article className="note-card">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button type="button" onClick={()=> onDeleteNote(note.id)}>
            Delete
        </button>
        <button type="button" onClick={()=> onEditNote(note)}>
            Edit
        </button>
    </article>
  )
}

export default NoteCard