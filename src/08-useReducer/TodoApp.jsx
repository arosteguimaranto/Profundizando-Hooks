import React, { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import {useForm} from '../hooks/useForm.js'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,

    }, {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    }
]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

    return (
        <>
            <h1> TodoApp: 10  <small> Pendientes: 2</small></h1>
            <hr />

            <div className=' row'>
                <div className='col-7'>

                    <TodoList
                        todos={todos}
                    />
                </div>


                <div className=' col-5'>
                    <h4> Agregar TODO </h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />


                </div>

            </div>


        </>
    )
}
