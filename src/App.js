import { useEffect, useState } from 'react';
import logo from './logo.svg';
import ao from './A&O.svg';
import './App.css';
import {Header, Footer} from './components/HeaderandFooter.js';
import {Form} from './components/Form.js'
import {Todolist} from "./components/Todolist.js"

function App() {
  const [alaaTodos, setTodos] = useState(JSON.parse(localStorage.getItem('alaaTodos')) || []);
    useEffect(() => {
        localStorage.setItem("alaaTodos", JSON.stringify(alaaTodos));
      });
  return (
    <div className="container">
      <Header logo={logo}/>
      <Form alaaTodos={alaaTodos} setTodos={setTodos} />
      <Todolist alaaTodos={alaaTodos} setTodos={setTodos} />
      <Footer  logo={logo} ao={ao}/>
    </div>
  );
}

export default App;
