import React, { useState } from "react";
import Layout from "../../../Layout/Layout";
import { useDispatch } from "react-redux";
import { createAgents } from "../Home/homeSlice";
import LoginModal from "../../../components/LoginModal";
export default function Createleads() {
   const dispatch= useDispatch()
   const [Open,setOpen]=useState(false)
  const initialstate = {
    fullname: "",
    email: "",
    phone: "",
    website: "",
    linkdin: "",
    skype: "",
    photo: "",
    userid: "",
  };
  const [user, setUser] = useState(initialstate);
  const [dping,setdping]=useState('')
  const [userid,setuserid]=useState('')
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser((prestate)=>({
        ...prestate,
        [name]:value
    }))
  };
  const handlesubmit = () => {
    const payload={
      ...user,
      userimg:dping,
      useridenti:userid
    }
    dispatch(createAgents(payload))
    setUser(initialstate);
  };
  const handleimage=(e)=>{
    setdping(e.target.files[0].name)
  }
  const handleid=(e)=>{
    setuserid(e.target.files[0].name)
  }
  return (
    <div>
      <Layout setModal={setOpen} >
        <div className="create-user">
          <div className="create">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handlechange}
              value={user.fullname}
            />
            <input
              type="email"
              name="email"
              placeholder="enter email"
              onChange={handlechange}
              value={user.email}
            />
            <input
              type="number"
              name="phone"
              id=""
              placeholder="Phone nm"
              onChange={handlechange}
              value={user.phone}
            />
            <input
              type="link"
              name="website"
              placeholder="website link"
              onChange={handlechange}
              value={user.website}
            />
            <input
              type="link"
              name="linkdin"
              placeholder="LinkedIn account"
              onChange={handlechange}
              value={user.linkdin}
            />
            <input
              type="link"
              name="skype"
              placeholder="Skype id"
              onChange={handlechange}
              value={user.skype}
            />
            <input type="file" onChange={handleimage} />
            <input type="file" onChange={handleid} />
            <div className="gender">
              <input type="checkbox" />
              <label>Male</label>
              <input type="checkbox" />
              <label>female</label>
            </div>
            <button onClick={handlesubmit}>Create Leads</button>
          </div>
        </div>
        {Open && <LoginModal show={Open} setOpen={setOpen}/>}
      </Layout>
    </div>
  );
}
