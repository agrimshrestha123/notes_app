import './App.css'
import NotesList from './components/NotesList'

function App() {
 const notes = [
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
 ]

  return (
    <>
     
       <main className='app'>
       <h1>My Notes App</h1>
        <NotesList notes={notes} />
       </main>
      
    </>
  )
}

export default App
