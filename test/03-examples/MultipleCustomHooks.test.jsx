const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");

describe('Pruebas en el <MultipleCustomHooks/>', () => { 

    test('debe de mostrar el componente por defecto', () => {
        
        render(<MultipleCustomHooks/>);

            //aserciones sabiendo el contenido 
         expect(screen.getByText('Loading...'))
         expect(screen.getByText('Rick And Morty'))

         //Tomar un boton o un elemento
         
         const nextButton = screen.getByRole('button', {name: 'Next Character'});
        expect(nextButton.disabled).toBeTruthy();

        
        
    });
 })