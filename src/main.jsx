import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';
//import { Padre } from './07-tarea-memo/Padre'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { Padre } from './07-tarea-memo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
)
