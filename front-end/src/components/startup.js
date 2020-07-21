import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";
import "../index.css";

function Startup() {
  return (
    <div className="startup">
      <header className="startup-header">
        <div className="startup-div">
          <h1>Riddle Me This...</h1>
          <img className="question" src={question} />
        </div>
      </header>
      <div className="h3-div">
        <h3>Welcome to a world of riddles! Press start below to enter!</h3>
      </div>
      <div className="startup-btn">
        <a href="/home">
          <button>Start</button>
        </a>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Startup;
