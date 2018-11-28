import axios from 'axios'
import React from 'react'
import { sessionsurl, headers } from '../components/apiconfig'

export function signin(session) {
  return function(dispatch, getState) {
    let body = { session: session }
    axios.post(`${sessionsurl}`, body, { headers: headers })

    .then(res => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
        hist.push('/');
        location.reload()
      }else{
      console.log('Connection error')
      }(dispatch);


    })

  }
}
