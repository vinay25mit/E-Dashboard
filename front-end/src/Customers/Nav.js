import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    // console.log("apple");
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
          <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" className="logo" />
          <span>{}</span>
      {auth ? (
        <ul className="nav-ul">
          <li style={{ color: "#fff" }}>
            <Link to="/">products</Link>
          </li>
          <li>
            <Link to="/add">Add products</Link>
          </li>
         

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link onClick={logout} to="/signup">
              Logout( {(JSON.parse(auth).name)})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/Usignup">User SignUP</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/ulogin">User Login</Link>
          </li>
        </ul>
      )}
      {/* <img className="logo" alt="image" src="https://image.flaticon.com/icons/svg/1170/1170678.svg"></img> */}
    </div>
  );
};
export default Nav;
