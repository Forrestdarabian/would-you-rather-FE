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

const UserLogin = ({ touched, errors, logInUser, history, token }) => {
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
      <div className="home-div">
        <h3>
          Welcome to the Login Page! Fill out the Form below to start posting
          riddles!
        </h3>
      </div>
      <div className="home-div">
        <Form onChange={handleChange} className="home-form">
          <Label for="username">Username: </Label>
          <Field
            autoCapitalize="off"
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter your Username"
          />
          <br />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}{" "}
          <Label for="password">Password: </Label>
          <Field
            type="password"
            name="password"
            className="form-control"
            placeholder=" Enter your Password"
          />
          <br />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="submit"
          >
            Login
          </Button>
        </Form>
      </div>
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
