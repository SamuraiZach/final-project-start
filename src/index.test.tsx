import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});
