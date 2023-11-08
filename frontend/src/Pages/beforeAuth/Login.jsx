import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate=useNavigate()
    const [userInfo,setUserInfo]=useState({
        email:'',
        password:'',
    })
    const [usrRoll,setUserRoll]=useState(false)
    console.log("🚀 ~ file: Login.jsx:11 ~ Login ~ userInfo:", userInfo)
    const [errormessage,setErrorMessage]=useState('')
    const handleonchange=(e)=>{
        const {name,value}=e.target
        setUserInfo((prestate)=>({
            ...prestate,
            [name]:value
        })) 
    }
    const handlesignin=()=>{
        console.log(userInfo.email)
        if(userInfo.email && userInfo.password){
            localStorage.setItem('email', userInfo.email);
            localStorage.setItem('password', userInfo.password);
            localStorage.setItem('roll', usrRoll)
            navigate('./home')
        }else{
            setErrorMessage('please fill first')
        }
    }

    const handleCheck=()=>{
      setUserRoll(!usrRoll)
    }
  return (
    <div className="main--contaner">
      <section>
        <div className="left">
          <h1>Get Started</h1>
          <input type="email" placeholder="User name" name="email" onChange={handleonchange} />
          <input type="password" placeholder="Password" name="password" onChange={handleonchange}/>
          <div className="checkadmin">
          <label>Are you Admin</label>
          <input type="checkbox" name="roll" onClick={handleCheck} />
          </div>
          <p className="error--message">{userInfo.email ? "" : errormessage}</p>

          <button onClick={handlesignin} >Sign In</button>
        </div>
      </section>
      <section>
          <div className="right">
            <h1>Welcome</h1>
            <img
              src="https://www.codegalaxy.co.in/uploads/2437f-logosmall.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              laudantium voluptatibus reprehenderit eius suscipit ab vitae
              tempora quos quaerat ipsam voluptas obcaecati nihil inventore
              sequi, architecto eos iure itaque! Consequuntur!
            </p>
          </div>
      </section>
    </div>
  );
}
