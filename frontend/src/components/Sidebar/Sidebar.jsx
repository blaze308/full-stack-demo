import React from "react";
import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
