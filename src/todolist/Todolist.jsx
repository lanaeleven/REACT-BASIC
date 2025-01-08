import Todo from "./Todo.jsx";

export default function Todolist() {
    return (
        <ul>
            <Todo text="Learn React" isCompleted={true} />
            <Todo text="Learn 1" isCompleted={false} isDeleted={true} />
            <Todo text="Learn 2" isCompleted={false} isDeleted={true} />
            <Todo text="Learn 3" isCompleted={false} />
        </ul>
    );
}