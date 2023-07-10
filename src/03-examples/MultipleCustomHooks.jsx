import { useFetch, useCounter } from "../hooks/index";
import { Species } from "./Species";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1> Rick And Morty </h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <Species name={data?.name} species={data?.species} />
      )}

      <button
        onClick={() => increment(1)}
        className=" btn btn-primary"
        disabled={isLoading}
      >
        Next Character
      </button>
    </>
  );
};
