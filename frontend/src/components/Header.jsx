import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const {setModal}=props
  const navigate=useNavigate()
  const handlenavigate=()=>{
    setModal(true)
  }
  const roll=localStorage.getItem('roll')
  return (
    <div className="header--compo">
      <b onClick={()=>navigate('/')}>Home</b>
      <div className="student--dashboard" onClick={handlenavigate}>
        <span class="material-symbols-outlined">account_circle</span>
        <b>{roll===true ? 'Admin' : 'Agent'} Profle</b>
      </div>
    </div>
  );
}
