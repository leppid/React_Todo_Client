import axios from "axios";
import React from "react";
import { usersurl, headers } from "../components/constants/apiconfig";
import hist from "../services/hist";
import { notify } from "reapop";

export function signup(user) {
  return function(dispatch, getState) {
    let body = {
      user: user
    };
    axios
      .post(`${usersurl}`, body, { headers })
      .then(res => {
        hist.push("/signin");
        dispatch(
          notify({ message: res.data.message, status: res.data.status })
        );
      })
      .catch(e => {
        const { message } = e.response.data;
        const { status } = e.response.data;
        dispatch(notify({ message, status }));
      });
  };
}

export function emailActivation(token) {
  return function(dispatch, getState) {
    let body = {
      user: token
    };
    axios
      .post(`${usersurl}/confirmemail`, body, { headers: headers })
      .then(res => {
        hist.push("/signin");
        dispatch(
          notify({ message: res.data.message, status: res.data.status })
        );
      })
      .catch(e => {
        const { message } = e.response.data;
        const { status } = e.response.data;
        dispatch(notify({ message, status }));
      });
  };
}
