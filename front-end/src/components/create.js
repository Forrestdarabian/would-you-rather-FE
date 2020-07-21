import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";
import { logOut, addRiddles } from "../store/actions";

import "../index.css";

let userName = localStorage.getItem("username");

const Create = ({
  touched,
  errors,
  logInUser,
  history,
  token,
  addRiddles,
  name,
  description,
  username,
}) => {
  if (!token) {
    history.push("/login/");
  }

  const [riddleItem, setRiddleItem] = useState({
    name: "",
    description: "",
    username: `${userName}`,
  });

  const [selectedCategory, setCategory] = useState("");

  const handleChanges = (e) => {
    setRiddleItem();
    setRiddleItem({ ...riddleItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(riddleItem);
    addRiddles(riddleItem);
    history.push(`/riddles`);
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
          Welcome to the Create Page! Fill out the Form below to post your own
          riddle!
        </h3>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="creation">
        {/* // onSubmit={(e) => handleSubmit(e)}> */}

        <div className="form-group">
          <label>Riddle Name: </label>
          <input
            className="form-control"
            id="name"
            type="text"
            name="name"
            maxLength={50}
            placeholder="Name"
            value={name}
            onChange={(e) => handleChanges(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Riddle Description: </label>
          <input
            className="form-control"
            id="description"
            type="text"
            name="description"
            maxLength={200}
            placeholder="Description"
            value={description}
            onChange={(e) => handleChanges(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Name: </label>
          <input
            className="form-control"
            id="username"
            type="text"
            name="username"
            maxLength={200}
            placeholder="Enter your name"
            value={username}
            onChange={(e) => handleChanges(e)}
            required
          />
        </div>
        <button type="submit" className="home">
          Submit
        </button>
        <br />
      </form>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP FORM`, state);
  return {
    state: state,
    token: state.token,
  };
};
export default connect(mapStateToProps, { addRiddles })(Create);
