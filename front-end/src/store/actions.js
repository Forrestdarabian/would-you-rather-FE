import axiosWithAuth from "../utils/axiosWithAuth";

//Registration Action

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = (user) => (dispatch) => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(`api/users/register`, {
      fullName: user.fullName,
      username: user.username,
      password: user.password,
      email: user.email,
    })
    .then((res) => {
      console.log(res.data);

      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
      return err;
    });
};

//Login Action

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const logInUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post(`api/users/login`, user)
    .then((res) => {
      console.log(res);
      localStorage.setItem("username", user.username);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
        user: res.data.user,
      });
    })
    .catch((res) =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: res.data,
      })
    );
};

// Logout Action
export const LOG_OUT = "LOG_OUT";

export const logOut = () => (dispatch) => {
  localStorage.removeItem("username");
  dispatch({ type: LOG_OUT });
};

// Fetching User Action
export const FETCHING_USER = "FETCHING_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCHING_FAILURE = "FETCH_FAILURE";

export const fetchUser = (username) => (dispatch) => {
  dispatch({ type: FETCHING_USER });
  axiosWithAuth()
    .get(`/api/auth/users/${username}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: FETCHING_FAILURE, payload: err.response.data.code })
    );
};

// Fetching riddles

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchRiddle = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get(`/api/users/riddles`)
    .then((res) => {
      console.log("fetched riddles", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

// Items Action
export const ADDING_RIDDLE = "ADDING_RIDDLE";
export const ADD_RIDDLE_SUCCESS = "ADD_RIDDLE_SUCCESS";
export const ADD_RIDDLE_FAILURE = "ADD_RIDDLE_FAILURE";

export const addRiddles = (riddleItems) => (dispatch) => {
  console.log(riddleItems);
  dispatch({ type: ADDING_RIDDLE });
  axiosWithAuth()
    .post(`/api/users/riddles`, riddleItems)
    .then((res) => {
      console.log(`ADD RIDDLES`, res);
      dispatch({
        type: ADD_RIDDLE_SUCCESS,
        // payload: res.data
        payload: riddleItems,
      });
    })
    .catch((res) =>
      dispatch({
        type: ADD_RIDDLE_FAILURE,
        payload: res.data,
      })
    );
};

//Edit Action
export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const updateRiddle = (updatedRiddle, id) => (dispatch) => {
  dispatch({ type: EDIT_START });
  axiosWithAuth()
    .put(
      `https://riddle-me-this-be.herokuapp.com/api/users/riddles/${id}`,
      updatedRiddle
    )
    .then((res) => {
      dispatch({ type: EDIT_SUCCESS, payload: updatedRiddle });
    })
    .catch((err) => {
      dispatch({ type: EDIT_FAILURE, payload: err.response.data.code });
      console.log(err.message);
    });
};

//Delete Action
export const DELETE_RIDDLE_START = "DELETE_RIDDLE_START";
export const DELETE_RIDDLE_SUCCESS = "DELETE_RIDDLE_SUCCESS";
export const DELETE_RIDDLE_FAILURE = "DELETE_RIDDLE_FAILURE";

export const deleteRiddle = (id) => (dispatch) => {
  dispatch({ type: DELETE_RIDDLE_START });
  axiosWithAuth()
    .delete(`https://riddle-me-this-be.herokuapp.com/api/users/riddles/${id}`)
    .then((res) => {
      console.log(res.data.message);
      dispatch({ type: DELETE_RIDDLE_SUCCESS, payload: id });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETE_RIDDLE_FAILURE, payload: err });
    });
};
