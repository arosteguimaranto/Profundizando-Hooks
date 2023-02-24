import { useLayoutEffect, useRef, useState} from "react";



export const Species = ({nombre, species}) => {

    const pRef = useRef();

    const [boxSize, setBoxSize]= useState({width: 0, height: 0 })

    useLayoutEffect(() =>{
       const {height, width} = pRef.current.getBoundingClientRect() ;
        setBoxSize({ height, width});
    }, [nombre])


    
    return (
        <>
        <blockquote className=" blockquote text-end"
        style={{display: 'flex'}}
        >
            <p ref={pRef} className=" mb-1">{nombre}</p>
            <footer className=" blockquote-footer">{species}</footer>
        </blockquote>

        <code> {JSON.stringify(boxSize)}</code>
        </>
    )
}
