import React, { useState } from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="navbar">
      <a href="/register">Register</a>
      <a href="/login">Login</a>
      <a className="active" href="/home">
        Home
      </a>
      <a href="/create">Create</a>
      <a href="/riddles">Riddles</a>
    </div>
  );
}

export default Footer;
