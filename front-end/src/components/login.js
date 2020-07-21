import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import { logInUser } from "../store/actions";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";
import "../index.css";

const UserLogin = ({ touched, errors, LogInUser, history, token }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      history.push("/create");
    }
  }, [token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((user.username, e && user.password)) {
      logInUser(user);
    }
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
            Welcome to the Login Page! Fill out the Form below to start posting
            riddles!
          </h3>
        </div>
        <div className="home-div">
          <form onChange={handleChange} className="home-form">
            <label>Username: </label>
            <input
              autocapitalize="off"
              type="text"
              className="form-control"
              placeholder=" Username"
            />
            <br />
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}{" "}
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              placeholder=" Enter password"
            />
            <br />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Login
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

const LoginWithFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username!"),
    password: Yup.string().required("Please enter a password!"),
  }),
})(UserLogin);

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { logInUser: logInUser })(
  LoginWithFormik
);
