import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import  createContext  from './todocontext.jsx'

function App() {
  let [todo,settodo]=useState([
    {id:0,data:'hello'}
  ]);

  //createcontext.provider will provide access of todo and settodo to <todo/> and all component inside <todo/>
  return (
    <>
    <createContext.Provider value={{todo,settodo}}>   
    <Todo/>
    </createContext.Provider>
    </>
  )
}

export default App
