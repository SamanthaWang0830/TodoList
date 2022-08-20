import {TiDelete} from 'react-icons/ti'
import {MdOutlineDoneOutline} from 'react-icons/md'
import {BsPencilSquare} from 'react-icons/bs'
import './task.styles.css'

const Task=(props)=>{

    const editTask =()=>{
        props.setUpdateData({taskName:props.taskName, id:props.id, completed: props.completed})
        props.setFlag(true)
    }

    const finish=()=>{
        props.completeTask(props.id)
    }

    const del=()=>{
        props.deleteTask(props.id)
        props.setUpdateData('')
    }

    return (
        <div className={props.completed? 'task done': 'task'} key={props.id}>
            <div className='index'>{props.index+1}</div>
            <div className='thing'>{props.taskName}</div>
            {props.completed? null: 
            <span onClick={editTask}><BsPencilSquare/></span>}
            <span onClick={finish}><MdOutlineDoneOutline/></span>
            <span onClick={del}><TiDelete/></span>
        </div>
    )
}
export default Task