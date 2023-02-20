import React from "react";
import Spinner from "./Spinner.jsx";
import error from "../assets/error-404.png";

function UserSearched({ load, data }) {
  if (data.message && data.message === "Not Found") {
    return (
      <div className="card">
        <img src={error} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h1>Sorry 😫, We could not find the user you are searching for.</h1>
        </div>
      </div>
    );
  }
  if (load) {
    return <Spinner />;
  }
  if (!load) {
    return (
      <div className="card">
        <img src={data.avatar_url} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h1>{data.login}</h1>
          <h4>
            <b>{data.name}</b>
          </h4>
          <h4>
            <b>{data.location}</b>
          </h4>
          <p>{data.bio}</p>
          <p style={{ marginTop: "2rem" }}>
            <a
              className="link"
              target="_blank"
              rel="noonponer"
              href={data.html_url}
            >
              Visit profile
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default UserSearched;
