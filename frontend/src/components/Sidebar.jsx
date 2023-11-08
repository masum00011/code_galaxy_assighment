import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar(props) {
  const { setModal } = props;
  const navigate = useNavigate();
  const userRoll = localStorage.getItem("roll");

  return (
    <div className="sidebar--root">
      <div className="sidebar--home" onClick={() => navigate("/home")}>
        <span class="material-symbols-outlined">dashboard</span>
        <p>Dashboard</p>
      </div>
      <div className="sidebar--home" onClick={() => navigate("/create-leads")}>
        <span class="material-symbols-outlined">new_window</span>
        <p>Create Leads</p>
      </div>
      {userRoll === "true" && (
        <div className="sidebar--home" onClick={() => navigate("/create-user")}>
          <span class="material-symbols-outlined">group_add</span>
          <p>Create Agent</p>
        </div>
      )}
      <div className="logout--div">
        <div className="sidebar--home" onClick={() => setModal(true)}>
          <span class="material-symbols-outlined">logout</span>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
