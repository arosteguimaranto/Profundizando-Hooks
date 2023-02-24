import {useFetch, useCounter} from '../hooks/index'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    
   
    

    return (
        <>
            <h1> Rick And Morty </h1>
            <hr />
            {

                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    ) : (
                        <blockquote className=" blockquote text-end">
                            <p className=" mb-1">{data.name}</p>
                            <footer className=" blockquote-footer">{data.species}</footer>
                        </blockquote>

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
