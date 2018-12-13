import axios from "axios";
import React from "react";
import hist from "../services/hist";
import { sessionsurl, headers } from "../components/apiconfig";
import { notify } from "reapop";

export function signin(session) {
  return function(dispatch, getState) {
    let body = {
      session: session
    };
    axios
      .post(`${sessionsurl}`, body, { headers: headers })

      .then(res => {
        const fullname = res.data.user.firstname + " " + res.data.user.lastname;
        localStorage.setItem(
          "activation_digest",
          res.data.user.activation_digest
        );
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("fullname", fullname);
        location.reload(hist.push("/"));
      })
      .catch(e => {
        const { message } = e.response.data;
        const { status } = e.response.data;
        dispatch(notify({ message, status }));
      });
  };
}
