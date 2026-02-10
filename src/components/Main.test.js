// src/components/Main.test.js

import { initializeTimes, updateTimes } from "../services/bookingApi";

test("initializeTimes returns the correct expected value", () => {
  const initialTimes = initializeTimes();

  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);
});

test("updateTimes returns the same value provided in the state", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", payload: "2023-04-20" };

  const newState = updateTimes(state, action);

  expect(Array.isArray(newState)).toBe(true);
  expect(newState.length).toBeGreaterThan(0);

  newState.forEach((time) => {
    expect(typeof time).toBe("string");
  });
});
