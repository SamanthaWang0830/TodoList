import {TiDelete} from 'react-icons/ti';
import {MdOutlineDoneOutline} from 'react-icons/md';
import {BsPencilSquare} from 'react-icons/bs';
import './task.styles.css';
import { useContext, useState } from 'react';
//import { TodoContext } from '../../context/todo.context';
import { useDispatch,useSelector } from 'react-redux';
import { completeTask,deleteTask,setFlag,setTemp } from '../../context/store/todo';

const Task=({id,index,taskName,completed})=>{

    

    //const {completeTask,deleteTask,setFlag,setTemp}=useContext(TodoContext)
    const dispatch=useDispatch();


    const editTask =()=>{
        dispatch(setTemp({taskName:taskName, id:id, completed: completed}))
        dispatch(setFlag(true))
    }

    const finish=()=>{
        dispatch(completeTask(id))
    }

    const del=()=>{
        dispatch(deleteTask(id))
    }

    return (
        <div className={completed? 'task done': 'task'} key={id}>
            <div className='index'>{index+1}</div>
            <div className='thing'>{taskName}</div>
            {completed? null: 
            <span onClick={editTask}><BsPencilSquare/></span>}
            <span onClick={finish}><MdOutlineDoneOutline/></span>
            <span onClick={del}><TiDelete/></span>
        </div>
    )
}
export default Task