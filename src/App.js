import { useState } from 'react';
import './App.css';
import Task from './component/task.component';
import Cat from './component/cat.component';
import Update from './component/update.component';

const App=()=>{

  //input输入
  const [newTask, setNewTask]=useState('')
  //更改todo事件
  const [updateData, setUpdateData]= useState('')
  //下方的显示
  const [todoList, setTodoList]=useState([])

  //控制update区域的出现
  const [flag, setFlag]= useState(false)

  const handleChange= (e)=>{
    setNewTask(e.target.value)
  }

  const clickToAddNewTask=()=>{
    if (newTask){
      let task={
        id:todoList.length==0? 1: todoList[todoList.length-1].id+1,
        completed: false,
        //input输入的东西，呈现在这里
        taskName: newTask
      }
      //展开之前的todoList，之后加上新的task
      setTodoList([...todoList, task])
      setNewTask('')
    }
  }

  const completeTask=(id)=>{
    setTodoList(
      todoList.map((task)=>{
        if (task.id==id){
          return {...task, completed:true}
        } else{
          return task
        }
      })
    )
  }

  const deleteTask=(id)=>{
    setTodoList(
      todoList.filter((task)=> task.id==id? false: true)
    )
  }

  const cancelChange=()=>{
    setUpdateData('')
  }


  const changeTask=(e)=>{
    let task={
      taskName:e.target.value,
      completed: updateData.completed,
      id: updateData.id
    }
    setUpdateData(task)
  }

  const updateTask=()=>{
    if(updateData.taskName){
      let filteList= todoList.filter(task=>task.id !==updateData.id )
      let updateTotal= [...filteList, updateData]
      setTodoList(updateTotal)
      setUpdateData('')
    } 
  }

  return (
    <div>
      <h1>To Do List App (ReactJS)</h1>
      <div className='addTask'>
        <input placeholder='Add Todo' onChange={handleChange} value={newTask} />
        <button onClick={clickToAddNewTask}>Add Task</button>
      </div>
      { flag && todoList.length? 
      <Update
      cancelChange={cancelChange}
      changeTask={changeTask}
      updateTask={updateTask}

      updateData={updateData}
      /> : ''}
      
      <div className='list'>
        { todoList.length? 
          todoList.map((task,index)=>{
            return (
              <Task
                id={task.id}
                taskName={task.taskName}
                completed={task.completed}
                index={index}

                setFlag={setFlag}
                setUpdateData={setUpdateData}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            )
          }) : <Cat/>
        }
      </div>
    </div>
  );
}

export default App;
