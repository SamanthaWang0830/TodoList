import './todoList.styles.css';
import Task from "../task/task.component";
import Cat from '../cat/cat.component';
//import { useContext } from 'react';
//import { TodoContext } from '../../context/todo.context';
import { useDispatch,useSelector } from 'react-redux';
import { selectTodo } from '../../context/store/todo';

const TodoList=()=>{
    //const {todoList}=useContext(TodoContext)
    const dispatch=useDispatch();
    const todos=useSelector(selectTodo)
    
    return (
        <div className='list'>
        { todos.length? 
          todos.map((task,index)=>{
            return (
              <Task
                id={task.id}
                taskName={task.taskName}
                completed={task.completed}
                index={index}
              />
            )
          }) : <Cat/>
        }
        </div>
    )
}

export default TodoList;