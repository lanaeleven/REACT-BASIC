import Note from './Note.jsx'
import { useContext } from 'react';
import { NotesContext } from './NoteContext.jsx';

export default function NoteList() {
    const notes = useContext(NotesContext);
    return (
        <ol>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note}/>
                </li>
            ))}
        </ol>
    );
}