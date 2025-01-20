import {useImmerReducer} from 'use-immer'
import NoteList from './NoteList.jsx'
import NoteForm from './NoteForm.jsx';
import { NotesContext } from './NoteContext.jsx'
import { NotesDispatchContext } from './NoteContext.jsx'

let id = 0;
const initialNotes = [
    {id: id++, text: 'Learn HTML', done: false},
    {id: id++, text: 'Learn CSS', done: false},
    {id: id++, text: 'Learn Javascript', done: false}
];

function NotesReducer(draft, action) {

    if (action.type === "ADD_NOTE") {
        draft.push({
            id: id++,
            text: action.text,
            done: false
        });
    } else if (action.type === "CHANGE_NOTE") {
        const index = draft.findIndex(item => item.id === action.id);
        draft[index].text = action.text;
        draft[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
        const index = draft.findIndex(item => item.id === action.id);
        draft.splice(index, 1);        
    }
    
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(NotesReducer, initialNotes);
    return (
        <div>
            <NotesContext.Provider value={notes} >
                <NotesDispatchContext.Provider value={dispatch} >
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    );
}