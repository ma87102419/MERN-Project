import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const nagivate = useNavigate();
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Course System</h1>
            <p className="col-md-8 fs-4">
              This system uses React.js as the front-end framework, and Node.js
              and MongoDB as the back-end server. This is the so-called MERN
              project, which is one of the most popular method to create a
              website.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              See how it works.
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a Student</h2>
              <p>
                Students can register courses they're interested in. <br />
                This website is for practice only. Please do not provide any
                personal information, such as credit card number.
              </p>
              <button
                onClick={async () => {
                  nagivate("/register");
                }}
                className="btn btn-outline-light"
                type="button"
              >
                Login or Register
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                You can become an instructor and create online courses after
                registration. <br />
                This website is for practice only. Please do not provide any
                personal information, such as credit card number.
              </p>
              <button
                onClick={async () => {
                  nagivate("/register");
                }}
                className="btn btn-outline-secondary"
                type="button"
              >
                Set up a course today!
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Kai-Jo Ma
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
