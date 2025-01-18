import { useState } from "react";

export default function Grocery({grocery, onChangeGroceries, onDeleteGrocery}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleChangeDone(e) {
        const newGrocery = {...grocery, done: e.target.checked};
        onChangeGroceries(newGrocery);
    }
    
    function handleClick() {
        onDeleteGrocery(grocery);
    }

    function handleChange(e) {
        const newGrocery = {...grocery, text: e.target.value};
        onChangeGroceries(newGrocery);
    }

    let component;

    if (isEditing) {
        component = <>
            <input type="text" value={grocery.text} onChange={handleChange} />   <button onClick={(() => setIsEditing(false))}>save</button>
        </>
    } else {
        component = <>
            {grocery.text}  <button onClick={() => setIsEditing(true)}>edit</button>
        </>
    }

    return (
        <>
            <input type="checkbox" checked={grocery.done} onChange={handleChangeDone} />
            {component}  <button onClick={handleClick}>delete</button>
        </>
    );
}