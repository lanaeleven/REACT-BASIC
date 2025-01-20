import { useState } from "react";
import { useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({note}) {
    const [isEditing, setIsEditing] = useState(false);
    let component;
    const dispatch = useContext(NotesDispatchContext);

    function handleChange(e) {
        dispatch({
            type: "CHANGE_NOTE",
            ...note,
            text: e.target.value
        });
    }

    function handleChangeDone(e) {
        dispatch({
            type: "CHANGE_NOTE",
            ...note,
            done: e.target.checked
        });
    }

    function handleDelete() {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        });
    }



    if (!isEditing) {
        component = <>{note.text}  <button onClick={() => setIsEditing(true)}>edit</button> </>
    } else {
        component = <><input type="text" value={note.text} onChange={handleChange} />  <button onClick={() => setIsEditing(false)} >save</button></>
    }

    return (
        <>
            <input type='checkbox' value={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={handleDelete}>delete</button>
        </>
    )
}