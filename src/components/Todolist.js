import {useState} from "react";
import {FaTrashAlt} from 'react-icons/fa'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
import {DDialog} from "./D_dialog.js"
import {EDialog} from "./E_dialog.js"

export function Todolist({alaaTodos, setTodos}) {
    const [filter, setFilter] = useState("");
    const completeHandler = (todo) => {
        setTodos(alaaTodos.map((t) => {
            if (t.id === todo.id) {
                return {
                    ...t, complated: !t.complated
                }
            }
            return t;
        }))
    }
    const [deleteTodo, setdeleteTodo] = useState("")
    const [editTodo, seteditTodo] = useState("")
    return(
        <div className="todo-list-container">
            <div className="filters flex">
                <button onClick={() => setFilter("")}>All</button>
                <button onClick={() => setFilter(true)}>Complated</button>
                <button onClick={() => setFilter(false)}>Uncomplated</button>
            </div>
            <div className="todo-list">
                {alaaTodos.map((todo) => (
                    <div className="todo-container" key={todo.id}>
                        {todo.complated === filter || filter === ""?
                        <div className={"todo flex " + todo.complated}>
                            <div className="todo-text">{todo.text}</div>
                            <div className='icons'>
                                <button onClick={() => seteditTodo(todo)}><FiEdit /></button>
                                <button onClick={() => completeHandler(todo)}><BsFillCheckCircleFill /></button>
                                <button onClick={() => setdeleteTodo(todo)}><FaTrashAlt /></button>
                            </div>
                        </div>
                        :<></>}                        
                    </div>
                ))}
                {deleteTodo !== "" ? <DDialog setdeleteTodo={setdeleteTodo} todo={deleteTodo} alaaTodos={alaaTodos} setTodos={setTodos} /> : <></>}
                {editTodo !== "" ? <EDialog seteditTodo={seteditTodo} todo={editTodo} alaaTodos={alaaTodos} setTodos={setTodos} /> : <></>}
            </div>
        </div>
    );
}
