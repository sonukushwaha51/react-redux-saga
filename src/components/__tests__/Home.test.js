import { render } from "react-dom";
import Home from "../Home"

test('render Home page',() => {
    render(<Home />)
    const el = screen.getByText(/Save/i);
    expect(el).toBeInTheDocument();
})