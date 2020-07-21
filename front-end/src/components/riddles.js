import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./card-view";
import loading from "../icons/giphy.gif";
import { logOut, fetchRiddle, deleteRiddle } from "../store/actions";
import "../index.css";
import Footer from "../functionality/footer";

const Riddles = (props) => {
  const { touched, errors, logInUser, history, token } = props;

  if (!token) {
    props.history.push("/login/");
  }
  useEffect(() => {
    props.fetchRiddle();
  }, []);

  const handleDelete = (id) => {
    console.log("deleted" + id);

    props.deleteRiddle(id);
  };
  return (
    <div className="home">
      <header className="home-header">
        <div className="startup-div">
          <h1>Riddle Me This...</h1>
          {/* <img className="question" src={question} /> */}
        </div>
      </header>
      <div className="home-div">
        <h3>
          Welcome to the Riddles Page! Read some of the posted riddles and try
          to solve them! <br /> If you're stuck, you can press the "Reveal
          Answer" button!
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {props.itemData.map((item) => {
          return (
            <div>
              <alert id="demo"></alert>
              <Card item={item} handleDelete={handleDelete} history={history} />
            </div>
          );
        })}{" "}
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("THIS IS MSTP STATE IN LOGIN", state);
  return {
    itemData: state.itemData,
    error: state.error,
    token: state.token,
  };
};

export default connect(mapStateToProps, { fetchRiddle, deleteRiddle })(Riddles);
