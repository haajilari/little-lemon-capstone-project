import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isDateValid = date !== "";
  const isTimeValid = time !== "";
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isOccasionValid = occasion !== "";

  const isValid =
    isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      aria-label="Booking Form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-label="Choose date"
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Choose time"
        aria-required="true"
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes?.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-label="Number of guests"
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="Occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Date Night</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isValid}
        aria-label="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;
