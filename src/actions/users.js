import axios from 'axios'
import React from 'react'
import {
  usersurl,
  headers
} from '../components/apiconfig'
import hist from '../services/hist'

export function signup(user) {
  return function (dispatch, getState) {
    let body = {
      user: user
    }
    axios.post(`${usersurl}`, body, {
        headers: headers
      })

      .then(res => {
        if (res.status === 200) {
          setTimeout(() => {
            hist.push('/signin');
            location.reload()
          })
        } else {
          console.log('Connection error')
        }(dispatch);


      })

  }
}

export function emailActivation(token) {
  return function (dispatch, getState) {
    let body = {
      user: token
    }
    axios.post(`${usersurl}/confirmemail`, body, {
        headers: headers
      })

      .then(res => {
        if (res.status === 200) {
          setTimeout(() => {
            hist.push('/signin');
            location.reload()
          })
        } else {
          console.log('Connection error')
        };


      })

  }
  }
