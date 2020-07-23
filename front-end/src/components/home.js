import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions";
import question from "../icons/question.svg";
import Footer from "../functionality/footer";
import "../index.css";

function Home(props) {
  const { touched, errors, logInUser, history, token } = props;
  let userName = localStorage.getItem("username");
  return (
    <div className="home">
      <header className="home-header">
        <div className="startup-div">
          <h1>Riddle Me This...</h1>
          <img className="question" src={question} />
        </div>
      </header>
      <div className="home-div">
        <h3>
          Welcome to the Home Page{userName ? `, ${userName}` : ""}! Register or
          Login now to Create / Solve some Riddles!
        </h3>
      </div>
      {token ? (
        <div>
          <NavLink to="/create">
            <button className="home">Submit a Riddle</button>
          </NavLink>
          <NavLink to="/riddles">
            <button className="home">Posted Riddles</button>
          </NavLink>
          <br />
          <button
            className="home"
            onClick={() => {
              props.logOut();
              props.history.push(`/login/`);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          {" "}
          <div className="home-btn">
            <a href="/register">
              <button>Register</button>
            </a>
            <a href="/login">
              <button>Login</button>
            </a>
          </div>
        </>
      )}

      <div className="explanation">
        <h3>What is this website?</h3>
        <p>
          Riddle Me This is an interactive site where you can post your own
          riddles for people to solve. Start by creating an account, then head
          over to the riddles tab to check some out!
        </p>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
    logInUser: state.logInUser,
  };
};
export default connect(mapStateToProps, { logOut: logOut })(Home);
