import { createContext, useState, useEffect } from 'react';

export const TodoContext= createContext({
    newTask:'',
    temp:'',
    todoList:[],
    flag:false,
    setTemp:()=>{},
    setFlag:()=>{},
    handleChange:()=>{},
    clickToAddNewTask:()=>{},
    completeTask:()=>{},
    deleteTask:()=>{},
    cancelChange:()=>{},
    changeTask:()=>{},
    clickToUpdateTask:()=>{},
})

export const TodoProvider=({children})=>{
    //input输入
    const [newTask, setNewTask]=useState('')
    //更改todo事件,相当于一个temp
    const [temp, setTemp]= useState('')
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
        setTemp('')
    }
    
    
    const changeTask=(e)=>{
        let task={
          taskName:e.target.value,
          completed: temp.completed,
          id: temp.id
        }
        setTemp(task)
    }
    
    const clickToUpdateTask=(e)=>{
        if(temp.taskName){
          let filteList= todoList.filter(task=>task.id !==temp.id )
          let updateTotal= [...filteList, temp]
          setTodoList(updateTotal)
          setTemp('')
        } 
    }

    const value={
        newTask,
        flag,
        todoList,
        temp,
        clickToUpdateTask,
        changeTask,
        cancelChange,
        deleteTask,
        completeTask,
        clickToAddNewTask,
        handleChange,
        setFlag,
        setTemp
    }
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}