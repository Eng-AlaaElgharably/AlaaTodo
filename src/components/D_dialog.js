import {FaTrashAlt} from 'react-icons/fa'

export function DDialog({todo, setdeleteTodo, setTodos, alaaTodos}) {
    const deleteTodo = (todo) => {
        setTodos(alaaTodos.filter((el) => el.id !== todo.id));
        setdeleteTodo("")
    }
    return(
        <div className="overlay flex">
            <div className="dialog flex">
                <div className="icon"><FaTrashAlt/></div>
                <h4>Are you sure?</h4>
                <div className="buttons flex">
                    <button className="no" onClick={() => setdeleteTodo("")}>No</button>
                    <button className="yes" onClick={() => deleteTodo(todo)}>Yes</button>
                </div>
            </div>
        </div>
    );
}
