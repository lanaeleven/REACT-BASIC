import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfieForm from "./ProfileForm";

export default function ProfileApp() {

    const [name, setName] = useState("");

    return (
        <ProfileContext value={name}>
            <h1>Profile</h1>
            <ProfieForm name={name} setName={setName} />
            <Profile />
            <ProfileAddress />
        </ProfileContext>
    );
    
}