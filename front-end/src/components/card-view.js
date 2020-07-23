import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import question from "../icons/question.svg";
import { NavLink } from "react-router-dom";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "40%",
    marginLeft: "30%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  h3: {
    marginLeft: "15%",
    marginRight: "15%",
  },
}));

export default function CardView({ item, handleDelete, history }) {
  function myFunction() {
    var x = document.getElementById("demo");
    alert("Answer: " + `${item.username}`);
  }
  function Random() {
    return (
      <div className="random">
        <button className="chances" onClick={() => myFunction()}>
          Click to Reveal Answer
        </button>
      </div>
    );
  }
  const classes = useStyles();
  let userName = localStorage.getItem("username");
  return (
    <Card
      className={classes.root}
      style={{
        margin: "20px",
        width: "300px",
        backgroundColor: "#011936",
        color: "#fefae0",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <h3>{item.description}</h3>

      <CardMedia className={classes.media} image={question} />
      <CardContent>
        <Typography
          className="card-stuff"
          variant="body1"
          fontFamily='Exo", sans-serif'
          color="#fefae0"
          component="h1"
        >
          <Random />
        </Typography>
        <br />
        <Typography variant="body1" color="#fefae0" component="h1">
          <h3>Riddle Posted By: {item.name}</h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton>
          <a
            className="icon-edit"
            onClick={() => history.push("edit-squad", { carddata: item })}
          >
            <EditIcon type="edit" key="edit" />
          </a>
        </IconButton>
        <Random />
        <IconButton
          className={classes.expand}
          onClick={() => handleDelete(item.id)}
          aria-label="show-more"
        >
          <DeleteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
