import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import { StrictMode } from "react";
import Todolist from "../todolist/Todolist.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <Todolist />
            <AlertButton text="Click Me" message="Button Clicked" />
            <MyButton text="Smash Me" onSmash={() => alert("You just smashed me, and that is very inappropriate 😠")} />
            <Counter />
        </Container>
    </StrictMode>
);