import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import AuthService from "../services/auth.service";

const Dashboard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (AuthService.getCurrentUser()){
      setContent(AuthService.getCurrentUser().user.username);
    }
    else {
      setContent("Not Logged in");
    }
    
  }, []);

  return (
    <div id="wrapper">
    <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand"><a href="#">Home</a></li>
            <li><a href="#">Another link</a></li>
            <li><a href="#">Next link</a></li>
            <li><a href="#">Last link</a></li>
        </ul>
    </div>
    <div id="page-content-wrapper">
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Track your day</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Home;
