import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("if NavBar renders with the text 'Home'", () => {
	render(<Login />);
	var text = screen.getByText(/login/i);
	expect(text).toBeInTheDocument();
});
