import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    // استفاده از React Fragment برای تمیزی DOM
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
