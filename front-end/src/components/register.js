import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";

import "../index.css";

function Register() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="startup-div">
          <h1>Riddle Me This...</h1>
          <img className="question" src={question} />
        </div>
      </header>
      <body className="home-body">
        <div className="home-div">
          <h3>
            Welcome to the Register Page! Fill out the Form below to Create an
            Account!
          </h3>
        </div>
        <div className="home-div">
          <form className="home-form">
            <label>Username: </label>
            <input
              autocapitalize="off"
              type="text"
              className="form-control"
              placeholder=" Username"
            />
            <br />
            <label>Password: </label>

            <input
              type="password"
              className="form-control"
              placeholder=" Enter password"
            />
            <br />
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              placeholder=" Enter email"
            />
            <br />
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </body>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Register;
