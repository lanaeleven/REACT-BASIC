im[o]
export default function NoteList({notes}) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>{note.text}</li>
            ))}
        </ul>
    );
}