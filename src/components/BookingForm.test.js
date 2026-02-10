import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Validation", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  test("Renders the booking form heading", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test("Date input has required attribute", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test("Time select has required attribute", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Guests input has min and max attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("Submit button is disabled initially (when fields are empty)", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when form is valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const submitButton = screen.getByRole("button");
    fireEvent.change(dateInput, { target: { value: "2023-05-20" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });

    expect(submitButton).not.toBeDisabled();
  });

  test("Function submitForm is called when valid form is submitted", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />,
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const submitButton = screen.getByRole("button");

    // پر کردن فرم
    fireEvent.change(dateInput, { target: { value: "2023-05-20" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });

    // کلیک روی دکمه
    fireEvent.click(submitButton);

    // بررسی اینکه آیا تابع submitForm فراخوانی شد؟
    expect(submitForm).toHaveBeenCalledTimes(1);
  });
});
