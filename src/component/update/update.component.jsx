import './update.styles.css'
//import { useContext } from 'react';
//import { TodoContext } from '../../context/todo.context';
import { useSelector,useDispatch } from 'react-redux'
import { changeTask,cancelChange,updateTask,selectFlag,selectTemp ,selectTodo} from '../../context/store/todo'

const Update=()=>{
    //const {changeTask,temp,flag,todoList,clickToUpdateTask,cancelChange} =useContext(TodoContext)
    const dispatch=useDispatch();
    const flag=useSelector(selectFlag)
    const temp=useSelector(selectTemp)
    const todoList=useSelector(selectTodo)

    return (
        flag && todoList.length? 
        (
            <div>
                <input onChange={(e)=>dispatch(changeTask(e.target.value))} value={temp&&temp.taskName} className='update' placeholder='Edit your Todo' />
                <button onClick={()=>dispatch(updateTask())} className="edit">Update</button>
                <button onClick={()=>dispatch(cancelChange())} className="cancel">Cancel</button>
            </div>
        ) : ''
    )
    
}
export default Update