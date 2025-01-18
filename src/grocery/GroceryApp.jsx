import { useImmerReducer } from "use-immer";
import GroceryForm from "./GroceryForm";
import GroceriesList from "./GroceriesList";

let id = 0;
const initialGroceries = [
    {id: id++, text: "Beras", done: false},
    {id: id++, text: "Minyak", done: false},
    {id: id++, text: "Gula", done: false}
];

function groceriesReducer(draft, action) {
    if (action.type === "ADD_GROCERY") {
        draft.push({
            id: id++,
            text: action.text,
            done: false
        })
    } else if (action.type === "CHANGE_GROCERY") {
        const index = draft.findIndex(item => item.id === action.id);
        draft[index].text = action.text;
        draft[index].done = action.done;
    } else if (action.type === "DELETE_GROCERY") {
        const index = draft.findIndex(item => item.id === action.id);
        draft.splice(index, 1);
    }
}

export default function GroceryApp() {
    const [groceries, dispatch] = useImmerReducer(groceriesReducer, initialGroceries);

    function onAddGroceries(text) {
        dispatch({
            type: "ADD_GROCERY",
            text: text
        });
    }

    function onChangeGroceries(grocery) {
        dispatch({
            ...grocery,
            type: "CHANGE_GROCERY"
        });
    }

    function onDeleteGrocery(grocery) {
        dispatch({
            type: "DELETE_GROCERY",
            id: grocery.id
        });
    }
    
    return (
        <>
            <h1>Groceries App</h1>
            <GroceryForm onAddGroceries={onAddGroceries} />       
            <GroceriesList groceries={groceries} onChangeGroceries={onChangeGroceries} onDeleteGrocery={onDeleteGrocery} />     
        </>
    );
}