// src/App.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders App component without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});
