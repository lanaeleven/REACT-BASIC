import { useImmer } from 'use-immer';
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';

export default function Task() {
    const [items, setItems] = useImmer([]);


    function onSubmit(item) {
        setItems(
            draft => {
                draft.push(item);
            }
        );
    }
    return (
        <div>
            <TaskForm onSubmit={onSubmit} />   
            <TaskList items={items} />           
        </div>
    );
}