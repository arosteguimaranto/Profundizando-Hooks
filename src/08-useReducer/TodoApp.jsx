import React, { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = [
   
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteToDo=(id) => {
         dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
     }

     const handleToggleTodo=(id) => {
        dispatch({
           type:'[TODO] Toggle Todo',
           payload: id
       });
    }

    


    return (
        <>
            <h1> TodoApp: 10 <small> Pendientes: 2</small></h1>
            <hr />

            <div className=' row'>
                <div className='col-7'>

                    <TodoList
                        todos={todos}
                        onDeleteTodo={ handleDeleteToDo}
                        onToggleTodo={handleToggleTodo}
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