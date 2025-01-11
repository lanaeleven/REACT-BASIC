import {useState} from 'react';
import {useImmer} from 'use-immer';

export default function() {
    // const [contact, setContact] = useState({
    //     name: "",
    //     message: ""
    // });

    // function handleNameChange(e) {
    //     setContact({...contact, name: e.target.value});
    // }

    // function handleMessageChange(e) {
    //     setContact({...contact, message: e.target.value});
    // }

    const [contact, setContact] = useImmer({
        name: "",
        message: ""
    });

    function handleNameChange(e) {
        setContact(draft => {
            draft.name = e.target.value;
        });
    }

    function handleMessageChange(e) {
        setContact(draft => {
            draft.message = e.target.value
        });
    }

    return (
        <div>
        <h1>Form Contact</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} />
            </form>
        <br/>
        <h1>Detail Contact</h1>
        <p>Name: {contact.name}</p>
        <p>Message: {contact.message}</p>
        </div>
    )
}