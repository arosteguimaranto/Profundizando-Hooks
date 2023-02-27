import React, { useReducer } from 'react'



const initialState = [
    {
        id: newDate().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,

    }, {
        id: newDate().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    }
]


export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);


    return (
        <>

            <h1> TodoApp</h1>
            <hr />

            <ul>
                <li> Item 1 </li>
                <li> Item 2 </li>
                <li> Item 3 </li>
            </ul>


        </>
    )
}
