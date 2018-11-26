const url;

process.env.NODE_ENV == 'production' ?
  url = 'http://localhost:3001':
  url = 'http://localhost:3000'

const sessionurl = URL + '/sessions'

const usersurl = URL + '/users'

const token = localStorage.getItem('token')

const ulocal = localStorage.getItem('username')

export default sessionurl

export default usersurl

export default token

export default ulocal
