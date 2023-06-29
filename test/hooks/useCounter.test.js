import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-test-renderer";

describe("Pruebas en el useCounter", () => {
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  });

  test('debe generar el counter con el valor de 100', () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('debe incrementar el contador', () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {

      increment();
      increment(2);


    })

    expect(result.current.counter).toBe(103);
  });

  test('debe de disminuir el contador', () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {

      decrement();
      decrement(2);

    });

    expect(result.current.counter).toBe(97);
  });


  test('debe de volver al valor inicial', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, reset} = result.current;

    act(() => {

      decrement();
      reset();
      

    })

    expect(result.current.counter).toBe(100);

  });




});
