import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./layout.css";
import LoginModal from "../components/LoginModal";
import Logout from "../components/Logout";
export default function Layout(props) {
  const { children } = props;
  const [Open,setOpen]=useState(false)
  const [logoutModal,setLogoutModal]=useState(false)
  return (
    <div className="layout--root">
      <div className="layout--header">
        <Header setModal={setOpen} />
      </div>
      <div className="layout-contaner">
        <div className="layout--sidebar">
          <Sidebar setModal={setLogoutModal} />
        </div>
        <div className="layout--content">
          <main>{children}</main>
        </div>
      </div>
      {Open && <LoginModal show={Open} setOpen={setOpen} />}
      {logoutModal && <Logout show={logoutModal} setLogout={setLogoutModal} />}
    </div>
  );
}
