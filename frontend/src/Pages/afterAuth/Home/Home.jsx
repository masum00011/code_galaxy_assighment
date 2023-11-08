import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "./homeSlice";
import "./homestyle.css";
import LoginModal from "../../../components/LoginModal";
import Logout from "../../../components/Logout";
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");


  const { data, loading } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchUserData(value));
  }, [value]);


  return (
    <div>
      <Layout>
        <div className="">
          <div className="search--courselist">
          <h2>Leads List</h2>
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="search here..."
            />
          </div>
          <div className="course--div">
            {data && data.length > 0 ? (
              data.map((item) => (
                <div
                  key={item.id}
                  className="course--card">
                  <img
                    src={item?.thumbnail}
                    className="course--img"
                    alt="url"
                  />
                  <p>{item?.name}</p>
                  <p>{item?.description}</p>
                  <p>{item?.duration}</p>
                </div>
              ))
            ) : (
              <div className="error-message">loading...</div>
            )}
          </div>
        </div>
      </Layout>
      
    </div>
  );
}
