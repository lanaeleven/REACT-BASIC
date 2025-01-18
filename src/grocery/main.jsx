import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import GroceryApp from "./GroceryApp";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GroceryApp />
    </StrictMode>
);