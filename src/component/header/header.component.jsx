import './header.styles.css';
import { useState } from 'react';
//import { useContext } from 'react';
//import { TodoContext } from '../../context/todo.context';
import { useDispatch} from 'react-redux';
import { addTodo} from '../../context/store/todo';

const Header=()=>{
    //const {handleChange,clickToAddNewTask,newTask}=useContext(TodoContext)
    const dispatch=useDispatch();

    const [input, setInput] = useState("");

    const clickToAddTask=()=>{
        if(input){
            dispatch(addTodo(input))
        }
        setInput('')
    }

    return (
        <>
            <h1>To Do List App (ReactJS)</h1>

            <div className='addTask'>
                <input placeholder='Add Todo' onChange={(e)=>setInput(e.target.value)} value={input} />
                <button onClick={clickToAddTask}>Add Task</button>
            </div>
        </>
    )
}
export default Header