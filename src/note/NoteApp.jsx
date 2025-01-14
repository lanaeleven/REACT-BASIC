import {useImmer} from 'use-immer'
import NoteList from './NoteList.jsx'

let id = 0;
const initialNotes = [
    {id: id++, text: 'Learn HTML', done: false},
    {id: id++, text: 'Learn CSS', done: false},
    {id: id++, text: 'Learn Javascript', done: false}
];

export default function NoteApp() {
    const [notes, setNotes] = useImmer(initialNotes);

    return (
        <div>
            <h1>Note App</h1>
            <NoteList notes={notes} />
        </div>
    );
}