import axios from "axios";
const API_URL = "https://mern-project-server.up.railway.app/api/courses";

class CourseService {
  post(title, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    try {
      return axios.post(
        API_URL,
        { title, description, price },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  // 使用學生 id，找到學生註冊的課程
  getEnrolledCourses(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    try {
      return axios.get(API_URL + "/student/" + _id, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  // 使用instructor id，來找到講師擁有的課程
  get(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    try {
      return axios.get(API_URL + "/instructor/" + _id, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  getCourseByName(name) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    try {
      return axios.get(API_URL + "/findByName/" + name, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  enroll(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    try {
      return axios.post(
        API_URL + "/enroll/" + _id,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default new CourseService();
