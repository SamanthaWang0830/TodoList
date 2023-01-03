import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo',
    initialState:{
        temp:'',
        todoList:[],
        flag:false,
    },
    reducers:{
        //state 就是上面的current state
        //action 包含type 和 payload （来自于component中）
        setFlag:(state,action)=>{
            state.flag=action.payload
        },
        setTemp:(state,action)=>{
            let tempTask={
                taskName:action.payload.taskName,
                id:action.payload.id,
                completed:action.payload.completed
            }
            state.temp=tempTask
        },
        //获取传递给函数的参数，使用action.payload
        //若多个函数，需要指明action.payload.**
        addTodo:(state,action)=>{
            state.todoList.push({
                id:state.todoList.length==0? 1: state.todoList[state.todoList.length-1].id+1,
                completed: false,
                taskName: action.payload
            })
            
        },
        completeTask:(state,action)=>{
            state.todoList.map((todo)=>{
                if(todo.id==action.payload){
                    todo.completed=true
                }
            })
        },
        deleteTask:(state,action)=>{
            state.todoList=state.todoList.filter((todo)=>todo.id !==action.payload)
            state.temp=''
        },
        cancelChange:(state,action)=>{
            state.temp=''
        },
        changeTask:(state,action)=>{
            let task={
                taskName:action.payload,
                completed: state.temp.completed,
                id: state.temp.id
            }
            state.temp=task
        },
        updateTask:(state,action)=>{
            if(state.temp.taskName){
                let filteList= state.todoList.filter(task=>task.id !==state.temp.id )
                let updateTotal= [...filteList, state.temp]
                state.todoList=updateTotal
                state.temp=''
            } 
        }
    }

})

export const {
    handleChange,
    addTodo,
    completeTask,
    deleteTask,
    cancelChange,
    changeTask,
    updateTask,
    setFlag,
    setTemp
}=todoSlice.actions;

export default todoSlice.reducer;

//select的是state
export const selectTodo=(state)=>state.todos.todoList;
export const selectFlag=(state)=>state.todos.flag;
export const selectTemp=(state)=>state.todos.temp;


/* export const selectAddTodo=(state)=>state.todos.addTodo;
export const selectCompleteTask=(state)=>state.todos.completeTask;
export const selectDeleteTask=(state)=>state.todos.deleteTask;
export const selectCancelChange=(state)=>state.todos.cancelChange;
export const selectChangeTask=(state)=>state.todos.changeTask;
export const selectUpdateTask=(state)=>state.todos.updateTask; */


