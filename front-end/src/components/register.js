import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";
import axiosWithAuth from "../utils/axiosWithAuth";
import { addUser } from "../store/actions";
import "../index.css";

const Register = (props) => {
  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
      email: e.target[2].value,
    };

    await axiosWithAuth()
      .post("api/users/register", {
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .then((res) => {
        console.log(res.data);
        props.history.push("/login/");
        return true;
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
        return err;
      });
  };
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
          <form onSubmit={(e) => handleSubmit(e)} className="home-form">
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
};

export default connect(null, { addUser: addUser })(Register);
