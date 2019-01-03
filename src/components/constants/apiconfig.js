let url;

process.env.NODE_ENV == "production"
  ? (url = "https://dtodo.herokuapp.com")
  : (url = "http://localhost:3000");

export const sessionsurl = url + "/sessions";

export const usersurl = url + "/users";

export const tasksurl = url + "/tasks";
