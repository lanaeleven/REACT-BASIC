import { useRef, useState } from "react";
import GuestBookInput from "./GuestBookInput";

export default function GuestBook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const nameInput = useRef(null);

    function handleClick(e) {
        e.preventDefault();
        setName("");
        setMessage("");
        nameInput.current.focus();
        alert(`${name} said: ${message}`);
    }
    return(
        <>
            <h1>Guest Book</h1>
            <form>
                <GuestBookInput name={name} setName={setName} ref={nameInput} />
                <label htmlFor="message">Message</label><br />
                <textarea name="mesage" value={message} onChange={(e) => setMessage(e.target.value)} /> <br />
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        </>
    );
}