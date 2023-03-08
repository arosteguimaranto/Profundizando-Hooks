import '@testing-library/jest-dom'
import {useCounter} from '../../hooks/useCounter';

describe('Pruebas en el useCounter', () => {
    
    test('debe de retornar los valores por defecto ', () => {
        
        const {result} = renderHook( () => useCounter());
        console.log(result)


    });

});