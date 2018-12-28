export const token = () => localStorage.getItem("activation_digest");

export const setToken = token =>
  localStorage.setItem("activation_digest", token);
