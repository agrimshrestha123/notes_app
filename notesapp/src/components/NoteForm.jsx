import { useState } from 'react'

const NoteForm = ({ onSaveNote, onCancelEdit, editingNote }) => {
    const [title, setTitle] = useState(editingNote ? editingNote.title : '')
    const[content, setContent] = useState(editingNote ? editingNote.content : '')
   
    function handleSubmit(e){
        e.preventDefault()
        const trimmedTitle = title.trim()
        const trimmedContent = content.trim()
        if(!trimmedTitle && !trimmedContent){
            return
        }
        onSaveNote({
            title: trimmedTitle,
            content: trimmedContent
        })
        setTitle('')
        setContent('')
}
return (
    <form className='note-form' onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(event)=>setTitle(event.target.value)}
        />
        <textarea
        placeholder='Content'
        value={content}
        onChange={(event)=>setContent(event.target.value)}
        />
        <button type='submit'>{editingNote ? 'Update Note' : 'Add Note'}</button>
        {
            editingNote && <button type='button' onClick={onCancelEdit}>Cancel</button>
        }
    </form>
)
}

export default NoteForm
