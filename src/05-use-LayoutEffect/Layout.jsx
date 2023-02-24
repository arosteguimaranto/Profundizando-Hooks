import{LoadingName, Species} from '../03-examples/index'
import {useFetch, useCounter} from '../hooks/index'

export const Layout = () => {
    const {counter, increment} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    
   
    

    return (
        <>
            <h1> Rick And Morty </h1>
            <hr />
            {

                isLoading
                    ? (
                       <LoadingName />

                    ) : (

                        <Species nombre={data.name} species={data.species} />

                    )
            }

            <button onClick={() => increment(1)}
            className=" btn btn-primary"
            disabled={isLoading}
            >
            Next Character
            </button>





        </>
    )
}
