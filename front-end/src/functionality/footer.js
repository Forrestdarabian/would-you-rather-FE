import React, { useState } from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="navbar">
      <a href="/register">
        <h1>Register</h1>
      </a>
      <a href="/login">
        <h1>Login</h1>
      </a>
      <a className="active" href="/home">
        <h1>Home</h1>
      </a>
      <a href="/create">
        <h1>Create</h1>
      </a>
      <a href="/riddles">
        <h1>Riddles</h1>
      </a>
    </div>
  );
}

export default Footer;
