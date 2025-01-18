import { useState } from "react";

export default function GroceryForm({onAddGroceries}) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        onAddGroceries(text);
        setText("");
    }

    return (
        <>
            <input type="text" value={text} onChange={handleChange} /> <button onClick={handleClick}>Add</button>
        </>
    );
}