import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
    const navigate=useNavigate()
    const {show,setLogout}=props
    const handleOverlayClick = (e) => {
        if (e.target.className === "modal show") {
            setLogout(false);
        }
      };
  return (
    <div>
      <div
        className={`modal ${show ? "show" : ""}`}
        onClick={handleOverlayClick}>
        <div className="contaner">
            <h3>Are you sure want to logout</h3>
            <div className="btn">
                <button onClick={()=>navigate('/')}>Yes</button>
                <button onClick={()=>setLogout(false)}>No</button>
            </div>
        </div>
      </div>
    </div>
  );
}
