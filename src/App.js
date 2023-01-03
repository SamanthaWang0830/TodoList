import { useState } from 'react';
import './App.css';
import TodoList from './component/todoList/todoList.component';
import Update from './component/update/update.component'; 
import Header from './component/header/header.component';

const App=()=>{
  return (
    <div>
      <Header/>
      <Update/>
      <TodoList/>
    </div>  
  );
}

export default App;
