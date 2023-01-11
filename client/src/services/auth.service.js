import axios from "axios";
const API_URL = "https://mern-project-server.up.railway.app//api/user";

class AuthService {
  login(email, password) {
    try {
      return axios.post(API_URL + "/login", { email, password });
    } catch (e) {
      console.log(e);
    }
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    try {
      return axios.post(API_URL + "/register", {
        username,
        email,
        password,
        role,
      });
    } catch (e) {
      console.log(e);
    }
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
