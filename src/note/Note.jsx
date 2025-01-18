import { useState } from "react";

export default function Note({note, onChangeNote, onDeleteNote}) {
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChange(e) {
        const newNote = {...note, text: e.target.value};
        onChangeNote(newNote);
    }

    function handleChangeDone(e) {
        const newNote = {...note, done: e.target.value};
        onChangeNote(newNote);
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
            <button onClick={() => onDeleteNote(note)}>delete</button>
        </>
    )
}