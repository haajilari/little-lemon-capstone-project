import React from "react";
import Nav from "./Nav";
// فرض می‌کنیم نام فایل لوگو را به 'logo.svg' تغییر داده‌اید
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
