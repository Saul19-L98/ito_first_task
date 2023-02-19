import React, { useState, useEffect } from "react";
import UserSearched from "./UserSearched.jsx";

const url = "https://api.github.com";

function Search() {
  //   const initialState = {};
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchUser = async (userName) => {
    const response = await fetch(`${url}/users/${userName}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    searchUser(user);
  };

  return (
    <>
      <div className="containerForm" style={{ marginTop: "2rem" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="formcontainer">
              <hr />
              <div className="container">
                <label>
                  <strong>Username</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={user}
                  onChange={handleChange}
                  required
                />
                {user.length > 0 && <button type="submit">Search</button>}
              </div>
            </div>
          </form>
        </div>
        {userData && <UserSearched load={loading} data={userData} />}
      </div>
      <div className="footer" style={{ marginTop: "1rem" }}>
        <h1>Github Repo</h1>
        <p>
          <a
            className="link"
            style={{}}
            target="_blank"
            rel="noonponer"
            href="https://github.com/Saul19-L98/ito_first_task"
          >
            Click her 👉
          </a>
        </p>
      </div>
    </>
  );
}

export default Search;
