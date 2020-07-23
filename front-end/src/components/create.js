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
          Welcome to the Create Page{userName ? `, ${userName}` : ""}! Fill out
          the Form below to post your own riddle!
        </h3>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="creation">
        {/* // onSubmit={(e) => handleSubmit(e)}> */}

        <div className="form-group">
          <label>Your Name: </label>
          <br />
          <textarea
            rows="1"
            cols="25"
            className="form-control"
            id="name"
            type="text"
            name="name"
            maxLength={50}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => handleChanges(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Riddle: </label>
          <br />

          <textarea
            rows="3"
            cols="25"
            className="form-control"
            id="description"
            type="text"
            name="description"
            maxLength={200}
            placeholder="Please enter the entire riddle here"
            value={description}
            onChange={(e) => handleChanges(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Answer: </label>
          <br />

          <textarea
            rows="2"
            cols="25"
            className="form-control"
            id="username"
            type="text"
            name="username"
            maxLength={200}
            placeholder="Please enter the answer to your riddle"
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
      <div className="bottom-copyright">
        <p>
          © 2020
          <b> Forrest Darabian </b>
        </p>
      </div>
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
