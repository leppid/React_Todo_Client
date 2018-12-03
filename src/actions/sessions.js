import axios from 'axios'
import React from 'react'
import hist from '../services/hist'
import { sessionsurl, headers } from '../components/apiconfig'
import {notify} from 'reapop';

export function signin(session) {
  return function (dispatch, getState) {
    let body = {
      session: session
    }
    axios.post(`${sessionsurl}`, body, { headers: headers })

      .then(res => {
        if (res.status === 200) {
          const fullname = res.data.user.firstname + ' ' + res.data.user.lastname
          localStorage.setItem('activation_digest', res.data.user.activation_digest)
          localStorage.setItem('email', res.data.user.email)
          localStorage.setItem('fullname', fullname)
          hist.push('/tasks')
          location.reload()
        } else {
        }(dispatch(notify({message: res.data.message, status: res.data.status })));


      })

  }
}
