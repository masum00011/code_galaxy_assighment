import React, { useState } from "react";
import Layout from "../../../Layout/Layout";
import "./style.css";
import { useDispatch } from "react-redux";
import { createAgents } from "../Home/homeSlice";
import LoginModal from "../../../components/LoginModal";
export default function CreateUser() {
  const dispatch = useDispatch();
  const [Open, setOpen] = useState(false);
  const [agents, setAgents] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const createAgent = () => {
    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      password.trim() === ""
    )
      return;

    if (editIndex !== null) {
      const updatedAgents = [...agents];
      updatedAgents[editIndex] = { fullName, email, phone, password };
      setAgents(updatedAgents);
      setEditIndex(null);
    } else {
      const newAgent = { fullName, email, phone, password };
      setAgents([...agents, newAgent]);
    }
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  const editAgent = (index) => {
    const agentToEdit = agents[index];
    setEditIndex(index);
    setFullName(agentToEdit.fullName);
    setEmail(agentToEdit.email);
    setPhone(agentToEdit.phone);
    setPassword(agentToEdit.password);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  const deleteAgent = (index) => {
    const updatedAgents = agents.filter((_, i) => i !== index);
    setAgents(updatedAgents);
  };

  return (
    <div>
      <Layout setModal={setOpen}>
        <div className="create-user">
          <h2>Create Agents</h2>
          <div className="create">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {editIndex !== null ? (
              <div>
                <button onClick={createAgent}>Save Edit</button>
                <button onClick={cancelEdit}>Cancel Edit</button>
              </div>
            ) : (
              <button onClick={createAgent}>Create User Agent</button>
            )}
          </div>
        </div>
        <div className="agentlist">
          <table>
            <tr>
              <th>Full Nmae</th>
              <th>Email Id</th>
              <th>Phone No</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {agents &&
              agents.map((item, index) => (
                <tr>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>
                    <span
                      class="material-symbols-outlined"
                      onClick={() => editAgent(index)}
                    >
                      edit
                    </span>
                  </td>
                  <td>
                    <span class="material-symbols-outlined" onClick={()=>deleteAgent(index)}>delete</span>
                  </td>
                </tr>
              ))}
          </table>
        </div>
        {Open && <LoginModal show={Open} setOpen={setOpen} />}
      </Layout>
    </div>
  );
}
