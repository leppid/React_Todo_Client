import axios from 'axios'
import React from 'react'
import hist  from '../components/hist'
import { usersurl, headers } from '../components/apiconfig'

export function signUp(user) {
  return function(dispatch, getState) {
    let body = { user: user }
    axios.post(`${usersurl}`, body, { headers: headers })

    .then(res => {
      if (res.status === 200) {
      setTimeout(() => {
        hist.push('/signin');
        location.reload()
      }, 3000)
      }else{
      console.log('Connection error')
      }(dispatch);


    })

  }
}
