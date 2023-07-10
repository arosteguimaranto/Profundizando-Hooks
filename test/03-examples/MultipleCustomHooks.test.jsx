const { render, fireEvent, screen } = require("@testing-library/react");
const {
  MultipleCustomHooks,
} = require("../../src/03-examples/MultipleCustomHooks");

import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en el <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    //aserciones sabiendo el contenido
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Rick And Morty"));

    //Tomar un boton o un elemento

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.disabled).toBeTruthy();
  });

/*   test("debe de mostrar un personaje ", () => {
    useFetch.mockReturnValue({
      data: [{ name: "Dylan", species: "Human" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Dylan").toBeTruthy());
    expect(screen.getByText("Human").toBeTruthy());

    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.disabled).toBeFalsy();
  }); */

  test("debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ name: "Dylan", specie: "Human" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Character" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
