// src/components/LocalStorage.test.js

describe("Local Storage functionality", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("writes to local storage", () => {
    const testData = {
      date: "2023-05-10",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };

    localStorage.setItem("bookings", JSON.stringify(testData));

    const storedData = localStorage.getItem("bookings");
    expect(storedData).toEqual(JSON.stringify(testData));
  });

  test("reads from local storage", () => {
    const testData = {
      date: "2023-05-12",
      time: "19:00",
      guests: 4,
      occasion: "Anniversary",
    };

    localStorage.setItem("bookings", JSON.stringify(testData));

    const retrievedData = JSON.parse(localStorage.getItem("bookings"));

    expect(retrievedData).toEqual(testData);
  });
});
