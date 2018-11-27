let url

process.env.NODE_ENV == 'production' ?
  url = 'http://localhost:3001'
  :
  url = 'http://localhost:3000'

export const headers = new Headers({ 'Content-Type': 'application/json'})

export const sessionurl = url + '/sessions'

export const usersurl = url + '/users'

export const token = localStorage.getItem('token')

export const uemail = localStorage.getItem('email')
