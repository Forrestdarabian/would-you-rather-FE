import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../functionality/footer";
import question from "../icons/question.svg";

import "../index.css";

function Create() {
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
            Welcome to the Create Page! Fill out the Form below to post your own
            riddle!
          </h3>
        </div>
        <form className="creation">
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
              // value={name}
              // onChange={(e) => handleChanges(e)}
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
              // value={description}
              // onChange={(e) => handleChanges(e)}
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
              // value={username}
              // onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <button type="submit" className="home">
            Submit
          </button>
          <br />
        </form>
      </body>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Create;
