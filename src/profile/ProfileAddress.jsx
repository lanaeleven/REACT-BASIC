import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {

    const profile = useContext(ProfileContext);
    return (
        <>
            <h2>Profil Address</h2>
            <p>{profile}'s Address</p>
        </>
    );
}