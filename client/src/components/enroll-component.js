import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  const handleTakeToLogin = () => {
    navigate("/login");
  };

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        setSearchResult(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id)
      .then(() => {
        window.alert(
          "Course Registration Success! Redirecting to the course page."
        );
        navigate("/course");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>Login before you register a new course.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Login
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>Only students can register new courses.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="search input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInput}
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search Course
          </button>
        </div>
      )}

      {currentUser && searchResult && searchResult.length != 0 && (
        <div>
          <p>This is the data returned from API:</p>
          {searchResult.map((course) => {
            return (
              <div key={course._id} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Course Name: {course.title}</h5>
                  <p style={{ margin: "0.5rem 0rem" }} className="card-text">
                    {course.description}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Number Of Students: {course.students.length}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Course Price(USD): ${course.price}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    Instructor: {course.instructor.username}
                  </p>

                  <a
                    href="#"
                    id={course._id}
                    className="card-text btn btn-primary"
                    onClick={handleEnroll}
                  >
                    Register Course
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;
