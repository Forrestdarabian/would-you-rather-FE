import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";

import "../index.css";

function Riddles() {
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
            Welcome to the Riddles Page! Read some of the posted riddles and try
            to solve them! <br /> If you're stuck, you can press the "Reveal
            Answer" button!
          </h3>
        </div>
      </body>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Riddles;
