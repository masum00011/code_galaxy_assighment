import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginModal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { show, setOpen } = props;
  const [message, setMessage] = useState("");
  const [detalis, setDetalis] = useState({
    email: "",
    password: "",
  });
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal show") {
      setOpen(false);
    }
  };
  
  const handleupdate = (e) => {
    const { name, value } = e.target;
    setDetalis((previes) => ({
      ...previes,
      [name]: value,
    }));
  };

  const handleuserLogin = () => {
    localStorage.setItem("email", detalis.email);
    localStorage.setItem("password", detalis.password);
    if (detalis.email) {
      // navigate('/home')
    } else {
      setMessage("Please fill first");
    }
  };
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={handleOverlayClick}>
      <div className="contaner">
        <h2>Update Admin Detalis </h2>
        <div className="inputfiled">
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg"
            alt=""
          />
          <input
            type="email"
            name="email"
            value={detalis.name}
            onChange={handleupdate}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            value={detalis.password}
            onChange={handleupdate}
            placeholder="Password"
          />
          <div>
            <p className="message">{detalis.email ? " " : message}</p>
            <button onClick={handleuserLogin}>Update Detalis</button>
          </div>
        </div>
      </div>
    </div>
  );
}
