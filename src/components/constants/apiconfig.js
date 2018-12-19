let url;

process.env.NODE_ENV == "production"
  ? (url = "http://localhost:3001")
  : (url = "http://localhost:3000");

export const sessionsurl = url + "/sessions";

export const usersurl = url + "/users";

export const tasksurl = url + "/tasks";
