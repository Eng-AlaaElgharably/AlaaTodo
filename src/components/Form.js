import {useState} from 'react';

export function Form({alaaTodos, setTodos}) {
    const [inputText, setinputText] = useState("");
    const inputHandler = (e) => {
        setinputText(e.target.value);
    }   
    const submitHandler = (e) => {
        e.preventDefault();
        if (!inputText) return;
        setTodos([...alaaTodos, {text: inputText, complated: false, id: Date.now()}]);
        setinputText("");
    } 
    return(
        <form className='flex'>
            <div className='input-container'>
                <input value={inputText} onChange={inputHandler} type="text" placeholder="Enter the task"/>
                <span className="text-border"></span>
            </div>
            <button onClick={submitHandler} type='submit' className='form-button'>Add</button>
        </form>
    );
}
