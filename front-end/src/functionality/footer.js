import React, { useState } from "react";
import "./footer.css";
import { logOut } from "../store/actions";
import { connect } from "react-redux";

function Footer(props) {
  const { touched, errors, logInUser, history, token } = props;
  let userName = localStorage.getItem("username");

  return (
    <div className="navbar">
      <div className="copyright">
        <p>
          © 2020
          <b> Forrest Darabian </b>
        </p>
      </div>
      <a className="active" href="/register">
        <h1>Register</h1>
      </a>
      <a className="active" href="/login">
        <h1>Login</h1>
      </a>
      <a className="active" href="/home">
        <h1>Home</h1>
      </a>
      <a className="active" href="/create">
        <h1>Create</h1>
      </a>
      <a className="active" href="/riddles">
        <h1>Riddles</h1>
      </a>
      {token ? (
        <button
          className="home"
          onClick={() => {
            props.logOut();
          }}
        >
          Logout
        </button>
      ) : (
        <></>
      )}

      <div className="left">
        {" "}
        <a href="mailto:forrestdarabian@gmail.com">
          <i className="ion-ios-email fa-icons"></i>
          Contact Me
        </a>{" "}
        <a href="https://www.forrestdarabian.com/">
          <i className="fa-angle-double-right"></i>Developers Site
        </a>
      </div>
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
export default connect(mapStateToProps, { logOut: logOut })(Footer);
