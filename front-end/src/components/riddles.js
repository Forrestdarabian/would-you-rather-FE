import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import "../index.css";

function Riddles() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="home-div">
          <h1>Riddle Me This...</h1>
        </div>
      </header>
      <body className="home-body">
        <div className="home-div">
          <h3>
            Welcome to the Riddles Page! Read some of the posted riddles and try
            to solve them! If you're stuck, you can press the "Reveal Answer"
            button!
          </h3>
        </div>
        <div className="home-btn">
          <a href="/riddles">
            <button>riddles</button>
          </a>
        </div>
        <div className="home-btn">
          <a href="/riddles">
            <button>riddles</button>
          </a>
        </div>
        <div className="home-div">
          <h3>What is this website?</h3>
          <p>
            Riddle Me This is an interactive site where you can post your own
            riddles for people to solve. Along with this, you can also try to
            solve riddles other people have posted. Start by creating an
            account, then head over to the riddles tab to check some out!
          </p>
        </div>
      </body>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Riddles;
