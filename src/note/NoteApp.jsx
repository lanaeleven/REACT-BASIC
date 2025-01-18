import {useImmer} from 'use-immer'
import NoteList from './NoteList.jsx'
import NoteForm from './NoteForm.jsx';

let id = 0;
const initialNotes = [
    {id: id++, text: 'Learn HTML', done: false},
    {id: id++, text: 'Learn CSS', done: false},
    {id: id++, text: 'Learn Javascript', done: false}
];

export default function NoteApp() {
    const [notes, setNotes] = useImmer(initialNotes);

    function handleAddNote(text) {
        setNotes(draft => {
            draft.push({
                id: id++,
                text: text,
                done: false
            })
        }
        );
    }

    function handleChangeNote(note) {
        setNotes(
            draft => {
                const index = draft.findIndex( item => item.id === note.id);
                draft[index] = note;
            }
        )
    }

    function handleDeleteNote(note) {
        setNotes(
            draft => {
                const index = draft.findIndex(item => item.id === note.id);
                draft.splice(index, 1);
            }
        );
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChangeNote={handleChangeNote} onDeleteNote={handleDeleteNote} />
        </div>
    );
}