import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import { StrictMode } from "react";
import Todolist from "../todolist/Todolist.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <Todolist />
        </Container>
    </StrictMode>
);