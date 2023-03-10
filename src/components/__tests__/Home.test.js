//import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('render Home page',() => {
    //const el = screen.getByText(/Save/i);
    expect(3+3).toBe(6);
})



describe('test bunch',() => {
    test.skip('first test',() => {
        expect(document).not.toBeNull()
    })
    test('testing',() => {
        const string1 = "PRODCUTS";
        expect(string1).not.toBeNull()
    })
})

// test('test second', async () => {
//     const a = await fetch("http://localhost:3000/product").then(res => res.json()).then(res => res.product[0].name)
//     expect(a).toContain("Canon EOS 5 DSLR Camera")
// })