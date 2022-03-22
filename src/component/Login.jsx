import React from "react";

const Login = () => {
  return (
    <>
      <h2>Login Form</h2>

      <form action="/action_page.php" method="post">
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar"></img>
        </div>

        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          ></input>

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          ></input>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"></input>
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </>
  );
};
export default Login;
