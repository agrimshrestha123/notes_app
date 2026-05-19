
const NoteCard = ({ note }) => {
  return (
    <article className="note-card">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
    </article>
  )
}

export default NoteCard