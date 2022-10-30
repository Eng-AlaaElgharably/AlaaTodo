import { useState } from "react";

export function EDialog({seteditTodo, todo, alaaTodos, setTodos}) {
    const [inputValue, setinputValue] = useState(todo.text);
    const inputvalueHandler = (e) => {
      setinputValue(e.target.value);
    }    
    const editTodo = (todo) => {
        setTodos(alaaTodos.map((t) => {
            if (t.id === todo.id && inputValue !==""){
              return{
                ...t, text: inputValue
              }
            }
            seteditTodo("")            
            return t;
          }));
    }
    return(
        <div className="overlay flex">
            <div className="dialog flex">
                <h4>Edit</h4>
                <div className='input-container'>
                    <input type="text" value={inputValue} onChange={inputvalueHandler} placeholder="Enter the task" />
                    <span className="text-border"></span>
                </div>
                <div className='buttons flex'>
                    <button className="cancel" onClick={() => seteditTodo("") }>cancel</button>
                    <button className='confirm' onClick={() => editTodo(todo) }>confirm</button>
                </div>
            </div>
        </div>
    );
}
