import Note from './Note.jsx'

export default function NoteList({notes, onChangeNote, onDeleteNote}) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note} onChangeNote={onChangeNote} onDeleteNote={onDeleteNote}/>
                </li>
            ))}
        </ul>
    );
}